const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

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

module.exports = {
  initial,
};
