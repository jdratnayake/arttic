const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const bycrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const { user, followerCreator, creator } = new PrismaClient();

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

  const openSeaUsernameStatus = await creator.findUnique({
    where: {
      openSeaUsername,
    },
  });

  if (openSeaUsernameStatus) {
    res.json({
      error: "OpenSea Username Already Registered! Please Enter Another One",
    });
  }

  const walletAddressStatus = await creator.findUnique({
    where: {
      walletAddress,
    },
  });

  if (walletAddressStatus) {
    res.json({
      error: "Wallet Address Already Registered! Please Connect Another One",
    });
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

  // 1 = verified account
  // 2 = valid account
  // 3 = details mismatched
  // 4 = unable to find the user account
  const accValidator = (account) => {
    if (account !== undefined) {
      if (account.address === walletAddress) {
        if (account.config === "") {
          res.json({
            statusCode: 2,
            msg: "Valid account",
          });
        } else {
          res.json({
            statusCode: 1,
            msg: "Verified account",
          });
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

module.exports = { register, login, creatorVerify };
