const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { user, userReport, postReport, commentReport, advertisementReport } =
  new PrismaClient();

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

const getPostComplaints = asyncHandler(async (req, res) => {
  const solve = await postReport.aggregate({
    where: {
      resolveStatus: true,
    },

    _count: {
      postReportId: true,
    },
  });

  const solveCount = parseInt(solve["_count"]["postReportId"]) || 0;

  const unSolve = await postReport.aggregate({
    where: {
      resolveStatus: false,
    },

    _count: {
      postReportId: true,
    },
  });

  const unSolveCount = parseInt(unSolve["_count"]["postReportId"]) || 0;

  const total = solveCount + unSolveCount;

  const userComplaintList = await postReport.findMany({
    orderBy: [
      {
        postReportId: "desc",
      },
    ],
    where: {
      resolveStatus: false,
    },
  });

  const outputData = {
    total,
    solveCount,
    unSolveCount,
    postComplaintList: userComplaintList,
  };

  res.json(outputData);
});

const getCommentComplaints = asyncHandler(async (req, res) => {
  const solve = await commentReport.aggregate({
    where: {
      resolveStatus: true,
    },

    _count: {
      commentReportId: true,
    },
  });

  const solveCount = parseInt(solve["_count"]["commentReportId"]) || 0;

  const unSolve = await commentReport.aggregate({
    where: {
      resolveStatus: false,
    },

    _count: {
      commentReportId: true,
    },
  });

  const unSolveCount = parseInt(unSolve["_count"]["commentReportId"]) || 0;

  const total = solveCount + unSolveCount;

  const userComplaintList = await commentReport.findMany({
    orderBy: [
      {
        commentReportId: "desc",
      },
    ],
    where: {
      resolveStatus: false,
    },
  });

  const outputData = {
    total,
    solveCount,
    unSolveCount,
    commentComplaintList: userComplaintList,
  };

  res.json(outputData);
});

const getAdvertismentComplaints = asyncHandler(async (req, res) => {
  const solve = await advertisementReport.aggregate({
    where: {
      resolveStatus: true,
    },

    _count: {
      advertisementReportId: true,
    },
  });

  const solveCount = parseInt(solve["_count"]["advertisementReportId"]) || 0;

  const unSolve = await advertisementReport.aggregate({
    where: {
      resolveStatus: false,
    },

    _count: {
      advertisementReportId: true,
    },
  });

  const unSolveCount =
    parseInt(unSolve["_count"]["advertisementReportId"]) || 0;

  const total = solveCount + unSolveCount;

  const userComplaintList = await advertisementReport.findMany({
    orderBy: [
      {
        advertisementReportId: "desc",
      },
    ],
    where: {
      resolveStatus: false,
    },
  });

  const outputData = {
    total,
    solveCount,
    unSolveCount,
    advertisementComplaintList: userComplaintList,
  };

  res.json(outputData);
});

const resolveComplaint = asyncHandler(async (req, res) => {
  const { complaintId, complaintType } = req.body;

  if (complaintType === 1) {
    const updateTable = await userReport.update({
      where: { userReportedId: complaintId },
      data: { resolveStatus: true },
    });
  } else if (complaintType === 2) {
    const updateTable = await postReport.update({
      where: { postReportId: complaintId },
      data: { resolveStatus: true },
    });
  } else if (complaintType === 3) {
    const updateTable = await commentReport.update({
      where: { commentReportId: complaintId },
      data: { resolveStatus: true },
    });
  } else if (complaintType === 4) {
    const updateTable = await advertisementReport.update({
      where: { advertisementReportId: complaintId },
      data: { resolveStatus: true },
    });
  }

  res.json({ complaintId, complaintType });
});

const getReportUserDetails = asyncHandler(async (req, res) => {
  const reportId = parseInt(req.headers.reportid);

  const report = await userReport.findUnique({
    where: {
      userReportedId: reportId,
    },
    select: { userId: true },
  });

  const userId = report.userId;

  const userDetails = await user.findUnique({
    where: {
      userId,
    },

    select: {
      userId: true,
      name: true,
      bio: true,
      profilePhoto: true,
      joinedDate: true,
      premiumUser: true,
      followerCreator: true,
    },
  });

  const userReportDetails = await userReport.findMany({
    take: 5,
    orderBy: [
      {
        userReportedId: "desc",
      },
    ],
    where: {
      userId,
    },
  });

  const postReportDetails = await postReport.findMany({
    take: 5,
    orderBy: [
      {
        postReportId: "desc",
      },
    ],
    where: {
      userId,
    },
  });

  const commentReportDetails = await commentReport.findMany({
    take: 5,
    orderBy: [
      {
        commentReportId: "desc",
      },
    ],
    where: {
      userId,
    },
  });

  const advertisementReportDetails = await advertisementReport.findMany({
    take: 5,
    orderBy: [
      {
        advertisementReportId: "desc",
      },
    ],
    where: {
      userId,
    },
  });

  const outputData = {
    userDetails,
    userReportDetails,
    postReportDetails,
    commentReportDetails,
    advertisementReportDetails,
  };

  res.json(outputData);
});

const getReportPostDetails = asyncHandler(async (req, res) => {
  res.json("Hi");
});

const getReportCommentDetails = asyncHandler(async (req, res) => {
  res.json("Hi");
});

const getReportAdvertismentDetails = asyncHandler(async (req, res) => {
  res.json("Hi");
});

module.exports = {
  getUserComplaints,
  getPostComplaints,
  getCommentComplaints,
  getAdvertismentComplaints,
  resolveComplaint,
  getReportUserDetails,
  getReportPostDetails,
  getReportCommentDetails,
  getReportAdvertismentDetails,
};
