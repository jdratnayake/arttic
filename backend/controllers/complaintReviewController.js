const { PrismaClient } = require("@prisma/client");
const { Client } = require("pg");
const asyncHandler = require("express-async-handler");

const {
  user,
  userReport,
  postReport,
  commentReport,
  advertisementReport,
  post,
  creator,
  comment,
  advertisement,
} = new PrismaClient();

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
      type: true,
      name: true,
      bio: true,
      profilePhoto: true,
      joinedDate: true,
      premiumUser: true,
      blockedStatus: true,
      followerCreator: true,
    },
  });

  const creatorDetails = await creator.findUnique({
    where: {
      userId,
    },

    select: {
      openSeaStatus: true,
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
      reportedUserId: userId,
    },
  });

  const client = new Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();

  let newResult = await client.query(
    'SELECT * FROM "post" INNER JOIN "postReport" ON "reportedPostId"="postId" WHERE "creatorId"=$1 ORDER BY "postReportId" DESC LIMIT 5',
    [userId]
  );

  const postReportDetails = newResult.rows;

  newResult = await client.query(
    'SELECT * FROM "comment" INNER JOIN "commentReport" ON "reportedCommentId"="commentId" WHERE "comment"."userId"=$1 ORDER BY "commentReportId" DESC LIMIT 5',
    [userId]
  );

  const commentReportDetails = newResult.rows;

  newResult = await client.query(
    'SELECT * FROM "advertisement" INNER JOIN "advertisementReport" ON "advertisement"."advertisementId"="advertisementReport"."advertisementId" WHERE "advertisement"."creatorId"=$1 ORDER BY "advertisementReportId" DESC LIMIT 5',
    [userId]
  );

  const advertisementReportDetails = newResult.rows;

  await client.end();

  const outputData = {
    userDetails,
    creatorDetails,
    userReportDetails,
    postReportDetails,
    commentReportDetails,
    advertisementReportDetails,
  };

  res.json(outputData);
});

// 1 = user
// 2 = post
// 3 = comment
// 4 = advertisement

const blockUser = asyncHandler(async (req, res) => {
  const { blockUserId, blockedAdminID, blockType } = req.body;

  let updateEntity;

  if (blockType === 1) {
    updateEntity = await user.update({
      where: {
        userId: blockUserId,
      },
      data: {
        blockedStatus: true,
        blockedDate: new Date(),
        blockedAdminID: blockedAdminID,
      },
    });
  } else if (blockType === 2) {
    updateEntity = await post.update({
      where: {
        postId: blockUserId,
      },
      data: {
        blockedStatus: true,
      },
    });
  } else if (blockType === 3) {
    updateEntity = await comment.update({
      where: {
        commentId: blockUserId,
      },
      data: {
        blockedStatus: true,
      },
    });
  } else if (blockType === 4) {
    updateEntity = await advertisement.update({
      where: {
        advertisementId: blockUserId,
      },
      data: {
        blockedStatus: true,
      },
    });
  }

  if (updateEntity) {
    res.json({
      statusCode: 1,
      msg: "Successful",
    });
  } else {
    res.json({
      statusCode: 2,
      msg: "Unsuccessful",
    });
  }
});

const getReportPostDetails = asyncHandler(async (req, res) => {
  const reportId = parseInt(req.headers.reportid);

  const report = await postReport.findUnique({
    where: {
      postReportId: reportId,
    },
  });

  const postOwner = await post.findUnique({
    where: {
      postId: report.reportedPostId,
    },
    select: { creatorId: true },
  });

  // res.json(postOwner);

  // return 0;
  const userId = postOwner.creatorId;
  const postId = report.reportedPostId;

  const userDetails = await user.findUnique({
    where: {
      userId,
    },

    select: {
      userId: true,
      type: true,
      name: true,
      bio: true,
      profilePhoto: true,
      joinedDate: true,
      premiumUser: true,
      blockedStatus: true,
      followerCreator: true,
    },
  });

  const creatorDetails = await creator.findUnique({
    where: {
      userId,
    },

    select: {
      openSeaStatus: true,
    },
  });

  const client = new Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();

  const result = await client.query(
    'SELECT * FROM "user" INNER JOIN "post" ON "post"."creatorId"="user"."userId" WHERE "postId"=$1',
    [postId]
  );

  await client.end();

  const userReportDetails = await userReport.findMany({
    take: 5,
    orderBy: [
      {
        userReportedId: "desc",
      },
    ],
    where: {
      reportedUserId: userId,
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
      reportedPostId: postId,
    },
  });

  const outputData = {
    userDetails,
    creatorDetails,
    postDetails: result.rows[0],
    postComplaint: report,
    userReportDetails,
    postReportDetails,
  };

  res.json(outputData);
});

const getReportCommentDetails = asyncHandler(async (req, res) => {
  const reportId = parseInt(req.headers.reportid);
  // console.log("Hi");
  let report = await commentReport.findUnique({
    where: {
      commentReportId: reportId,
    },
  });

  const getPostId = await comment.findUnique({
    where: {
      commentId: report.reportedCommentId,
    },
  });

  report = {
    ...report,
    commentName: getPostId.description,
    commentStatus: getPostId.blockedStatus,
  };

  const userId = getPostId.userId;
  const postId = getPostId.postId;

  // res.json({ userId, postId });

  // return 0;

  const userDetails = await user.findUnique({
    where: {
      userId,
    },

    select: {
      userId: true,
      type: true,
      name: true,
      bio: true,
      profilePhoto: true,
      joinedDate: true,
      premiumUser: true,
      blockedStatus: true,
      followerCreator: true,
    },
  });

  const creatorDetails = await creator.findUnique({
    where: {
      userId,
    },

    select: {
      openSeaStatus: true,
    },
  });

  const client = new Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();

  const result = await client.query(
    'SELECT * FROM "user" INNER JOIN "post" ON "post"."creatorId"="user"."userId" WHERE "postId"=$1',
    [postId]
  );

  await client.end();

  const userReportDetails = await userReport.findMany({
    take: 5,
    orderBy: [
      {
        userReportedId: "desc",
      },
    ],
    where: {
      reportedUserId: userId,
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
      reportedPostId: postId,
    },
  });

  const outputData = {
    userDetails,
    creatorDetails,
    postDetails: result.rows[0],
    commentComplaint: report,
    userReportDetails,
    postReportDetails,
  };

  res.json(outputData);
});

const getReportAdvertismentDetails = asyncHandler(async (req, res) => {
  const reportId = parseInt(req.headers.reportid);

  const report = await advertisementReport.findUnique({
    where: {
      advertisementReportId: reportId,
    },
  });

  const advertisementDetails = await advertisement.findUnique({
    where: {
      advertisementId: report.advertisementId,
    },
  });

  // res.json(advertisementOwner);

  // return 0;

  const userId = advertisementDetails.creatorId;
  const advertisementId = report.advertisementId;

  const userDetails = await user.findUnique({
    where: {
      userId,
    },

    select: {
      userId: true,
      type: true,
      name: true,
      bio: true,
      profilePhoto: true,
      joinedDate: true,
      premiumUser: true,
      blockedStatus: true,
      followerCreator: true,
    },
  });

  const creatorDetails = await creator.findUnique({
    where: {
      userId,
    },

    select: {
      openSeaStatus: true,
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
      reportedUserId: userId,
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
      advertisementId: advertisementId,
    },
  });

  const outputData = {
    userDetails,
    creatorDetails,
    advertisementReport: report,
    advertisementDetails,
    userReportDetails,
    advertisementReportDetails,
  };

  res.json(outputData);
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
  blockUser,
};
