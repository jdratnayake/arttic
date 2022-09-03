const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { user, userReport } = new PrismaClient();

const getUserComplaints = asyncHandler(async (req, res) => {
  const solve = await userReport.aggregate({
    where: {
      resolveStatus: true,
    },

    _count: {
      userReportedId: true,
    },
  });

  const solveCount = parseInt(solve["_count"]["userReportedId"]) || 0;

  const unSolve = await userReport.aggregate({
    where: {
      resolveStatus: false,
    },

    _count: {
      userReportedId: true,
    },
  });

  const unSolveCount = parseInt(unSolve["_count"]["userReportedId"]) || 0;

  const total = solveCount + unSolveCount;

  const userComplaintList = await userReport.findMany({
    orderBy: [
      {
        userReportedId: "desc",
      },
    ],
    where: {
      resolveStatus: false,
    },
  });

  const outputData = { total, solveCount, unSolveCount, userComplaintList };

  res.json(outputData);
});

module.exports = {
  getUserComplaints,
};
