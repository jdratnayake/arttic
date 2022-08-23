const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { user, followerCreator } = new PrismaClient();

const initial = asyncHandler((req, res) => {
  res.json("Hi");
});

module.exports = {
  initial,
};
