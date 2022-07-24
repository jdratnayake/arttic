const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const bycrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const { user } = new PrismaClient();

const register = asyncHandler(async (req, res) => {
  const { type, firstName, lastName, email, accountStatus, password } =
    req.body;

  const emailStatus = await user.findUnique({
    where: {
      email,
    },
  });

  //   res.json({ test: emailStatus });

  //   return 0;
  if (emailStatus) {
    res.json({ error: "Email Already Registered! Please Login" });
  } else {
    bycrypt.hash(password, 10).then(async (hash) => {
      const newUser = await user.create({
        data: {
          type,
          firstName,
          lastName,
          email,
          accountStatus,
          password: hash,
        },
      });

      res.status(StatusCodes.CREATED).json(newUser);
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

module.exports = { register, login };
