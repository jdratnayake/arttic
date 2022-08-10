const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const bycrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { user, followerCreator, creator } = new PrismaClient();

const { generateOtp, otpEmail } = require("./authControllerHelper");

// this API is used in the SignUpPage
const emailCheck = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const emailStatus = await user.findUnique({
    where: {
      email,
    },
  });
  if (emailStatus) {
    res.json({ isUnique: false });
  } else {
    res.json({ isUnique: true });
  }
});

const register = asyncHandler(async (req, res) => {
  const { userType, name, email, password } = req.body;

  const emailStatus = await user.findUnique({
    where: {
      email,
    },
  });

  // 3 = creator
  // 4 = follower
  if (emailStatus) {
    res.json({ error: "Email Already Registered! Please Login" });
  } else {
    bycrypt.hash(password, 10).then(async (hash) => {
      // add data to the user table
      const newUser = await user.create({
        data: {
          type: userType,
          name,
          email,
          username: email,
          password: hash,
        },
      });

      // add data to the followerCreator table
      const newFollower = await followerCreator.create({
        data: {
          userId: newUser.userId,
        },
      });

      // add data to the creator table
      if (userType === 3) {
        const newCreator = await creator.create({
          data: {
            userId: newUser.userId,
            pageName: newUser.username,
          },
        });
      }

      const accessToken = sign(
        { email: newUser.email, userId: newUser.userId },
        process.env.JWT_SECRET
      );

      const returnData = {
        userId: newUser.userId,
        type: newUser.type,
        name: newUser.name,
        email: newUser.email,
        emailStatus: newUser.emailStatus,
        username: newUser.username,
        profilePhoto: newUser.profilePhoto,
        accessToken: accessToken,
      };

      res.status(StatusCodes.CREATED).json(returnData);
    });
  }
});

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const existUser = await user.findFirst({
    where: {
      OR: [
        {
          email: username,
        },
        {
          username: username,
        },
      ],
    },
  });

  let creatorStatus;
  if (existUser && existUser.type === 3) {
    creatorStatus = await creator.findUnique({
      where: {
        userId: existUser.userId,
      },
      select: {
        openSeaStatus: true,
      },
    });
  }
  // console.log(existUser);

  if (existUser) {
    bycrypt.compare(password, existUser.password).then((match) => {
      if (match) {
        const accessToken = sign(
          { email: existUser.email, userId: existUser.userId },
          process.env.JWT_SECRET
        );

        let returnData = {
          userId: existUser.userId,
          type: existUser.type,
          name: existUser.name,
          email: existUser.email,
          emailStatus: existUser.emailStatus,
          username: existUser.username,
          profilePhoto: existUser.profilePhoto,
          accessToken: accessToken,
        };

        if (existUser.type === 3) {
          returnData = {
            ...returnData,
            openSeaStatus: creatorStatus.openSeaStatus,
          };
        }

        res.json(returnData);
      } else {
        res.json({
          error: { username: "", password: "Wrong Password Entered" },
        });
      }
    });
  } else {
    res.json({
      error: { username: "Email or Username Doesn't Exist", password: "" },
    });
  }
});

const creatorVerify = asyncHandler(async (req, res) => {
  const pythonScript = "./scripts/account-extractor.py";

  const uint8arrayToString = (data) => {
    return String.fromCharCode.apply(null, data);
  };

  const { userId, openSeaUsername, walletAddress } = req.body;

  const errorData = { username: "", walletAddress: "" };
  let errorSignal = false;

  const openSeaUsernameStatus = await creator.findUnique({
    where: {
      openSeaUsername,
    },
  });

  if (openSeaUsernameStatus) {
    errorData.username =
      "OpenSea Username Already Registered! Please Enter Another One";

    errorSignal = true;
  }

  const walletAddressStatus = await creator.findUnique({
    where: {
      walletAddress,
    },
  });

  if (walletAddressStatus) {
    errorData.walletAddress =
      "Wallet Address Already Registered! Please Connect Another One";
    errorSignal = true;
  }

  if (errorSignal) {
    res.json({
      error: errorData,
    });
    return 0;
  }

  const spawn = require("child_process").spawn;

  const scriptExecution = spawn("python.exe", [pythonScript, openSeaUsername]);

  // Handle normal output
  scriptExecution.stdout.on("data", (data) => {
    let profile = JSON.parse(uint8arrayToString(data)); // return a JSON object
    // res.send(profile); // display in the browser
    // console.log(profile);
    accValidator(profile.account, walletAddress);
  });

  // Handle error output
  scriptExecution.stderr.on("data", (data) => {
    // As said before, convert the Uint8Array to a readable string.
    console.log(uint8arrayToString(data));
  });

  let creatorStatus = 0;

  // 1 = verified account
  // 2 = valid account
  // 3 = details mismatched
  // 4 = unable to find the user account
  const accValidator = async (account) => {
    if (account !== undefined) {
      if (account.address === walletAddress) {
        if (account.config === "") {
          creatorStatus = 2;
        } else {
          creatorStatus = 1;
        }

        await creator.update({
          where: {
            userId: userId,
          },
          data: {
            openSeaUsername: openSeaUsername,
            walletAddress: walletAddress,
            openSeaStatus: creatorStatus,
          },
        });
      } else {
        res.json({
          statusCode: 3,
          msg: "Details mismatched",
        });
      }
    } else {
      res.json({
        statusCode: 4,
        msg: "Unable to find the user account",
      });
    }

    if (creatorStatus === 1) {
      res.json({
        statusCode: 1,
        msg: "Verified account",
      });
    } else if (creatorStatus === 2) {
      res.json({
        statusCode: 2,
        msg: "Valid account",
      });
    }
  };
});

// password recovery - START

const usernameCheck = asyncHandler(async (req, res) => {
  const { username } = req.body;

  const existUser = await user.findFirst({
    where: {
      OR: [
        {
          email: username,
        },
        {
          username: username,
        },
      ],
    },
  });

  if (existUser) {
    res.json({ isExist: true });
  } else {
    res.json({ isExist: false });
  }
});

const forgotPasswordOtp = asyncHandler(async (req, res) => {
  const { username } = req.body;
  const otp = generateOtp();

  const status = await user.updateMany({
    where: {
      OR: [
        {
          email: username,
        },
        {
          username: username,
        },
      ],
    },
    data: {
      forgotPasswordOtp: otp,
    },
  });

  const existUser = await user.findFirst({
    where: {
      OR: [
        {
          email: username,
        },
        {
          username: username,
        },
      ],
    },
  });

  //email test - START
  const htmlEmail = otpEmail(existUser.name, otp);

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "alec.software.cooperation@gmail.com",
      pass: "lbwzzqktlqaicniu",
    },
  });

  const mailOptions = {
    from: "alec.software.cooperation@gmail.com",
    to: existUser.email,
    replyTo: existUser.email,
    subject: "Password reset - ARTTIC",
    html: htmlEmail,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("error in sending mail", err);
      return res.status(400).json({
        message: `error in sending the mail${err}`,
      });
    } else {
      return res.json({ message: "Successfully sent Email." });
    }
  });
  //email test - END

  if (status) {
    res.json({
      statusCode: 1,
      msg: "OTP generated",
    });
  } else {
    res.json({
      statusCode: 2,
      msg: "Error in OTP",
    });
  }
});

const forgotPasswordOtpCheck = asyncHandler(async (req, res) => {
  const { username, otp } = req.body;

  const existUser = await user.findFirst({
    where: {
      OR: [
        {
          email: username,
        },
        {
          username: username,
        },
      ],
    },
    select: {
      forgotPasswordOtp: true,
    },
  });

  if (otp === existUser.forgotPasswordOtp) {
    res.json({
      statusCode: 1,
      msg: "Valid Access",
    });
  } else {
    res.json({
      statusCode: 2,
      msg: "Invalid Access",
    });
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  bycrypt.hash(password, 10).then(async (hash) => {
    const status = await user.updateMany({
      where: {
        OR: [
          {
            email: username,
          },
          {
            username: username,
          },
        ],
      },
      data: {
        password: hash,
      },
    });

    if (status) {
      res.json({
        statusCode: 1,
        msg: "Password Changed",
      });
    } else {
      res.json({
        statusCode: 2,
        msg: "Error in Password Changed",
      });
    }
  });
});

// password recovery - END

module.exports = {
  register,
  login,
  creatorVerify,
  emailCheck,
  usernameCheck,
  forgotPasswordOtp,
  forgotPasswordOtpCheck,
  resetPassword,
};
