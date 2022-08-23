const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const bycrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { StatusCodes } = require("http-status-codes");

const { user, followerCreator } = new PrismaClient();

const initial = asyncHandler(async (req, res) => {
  //   Admin1 details
  const admin1 = await user.findMany({
    where: {
      type: 2,
    },
    select: {
      userId: true,
      name: true,
      email: true,
      joinedDate: true,
      profilePhoto: true,
      blockedStatus: true,
    },
  });

  const outputData = { admin1: admin1 };
  res.json(outputData);
});

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userType = 2;

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
      const newAdmin = await user.create({
        data: {
          type: userType,
          name,
          email,
          username: email,
          password: hash,
        },
      });

      res.status(StatusCodes.CREATED).json(newAdmin);
    });
  }
});

module.exports = {
  initial,
  registerAdmin,
};
