const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const bycrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const { user, followerCreator, creator } = new PrismaClient();

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

      const returnData = {
        userId: newUser.userId,
        type: newUser.type,
        name: newUser.name,
        email: newUser.email,
        emailStatus: newUser.emailStatus,
        username: newUser.username,
        profilePhoto: newUser.profilePhoto,
      };

      res.status(StatusCodes.CREATED).json(returnData);
    });
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const existUser = await user.findUnique({
    where: {
      email,
    },
  });

  if (existUser) {
    bycrypt.compare(password, existUser.password).then((match) => {
      if (match) {
        res.json(existUser);
      } else {
        res.json({ error: "Wrong Password Entered" });
      }
    });
  } else {
    res.json({ error: "Email Doesn't Exist" });
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

  const updateCreator = async (status) => {
    const updateCreatorDetails = await creator.update({
      where: {
        userId: userId,
      },
      data: {
        openSeaUsername: openSeaUsername,
        walletAddress: walletAddress,
        openSeaStatus: status,
      },
    });

    if (status === 1) {
      res.json({
        statusCode: 1,
        msg: "Verified account",
      });
    } else if (status === 2) {
      res.json({
        statusCode: 2,
        msg: "Valid account",
      });
    }
  };

  // 1 = verified account
  // 2 = valid account
  // 3 = details mismatched
  // 4 = unable to find the user account
  const accValidator = (account) => {
    if (account !== undefined) {
      if (account.address === walletAddress) {
        if (account.config === "") {
          updateCreator(2);
        } else {
          updateCreator(1);
        }
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
  };
});

module.exports = { register, login, creatorVerify, emailCheck };
