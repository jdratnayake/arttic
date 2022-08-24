const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");
const { Client } = require("pg");
const SAVEPOSTLIMIT = 20;

const {
  post,
  advertisement,
  comment,
  postReaction,
  commentReaction,
  postReport,
  advertisementReport,
  commentReport,
  postSave,
} = new PrismaClient();

//  upload a favorite post ***************
const uploadPostSave = asyncHandler(async (req, res) => {
  const Data = req.body;
  const userId = parseInt(req.headers.userid);
  let createPostSave = {};

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

  const isShowAd = await client.query(
    'SELECT "showAd" FROM public."premiumPackageSubscribe" WHERE "userId" = $1 AND "endDate" > Date(NOW());',
    [userId]
  );

  await client.end();

  if (isShowAd.rows[0].showAd) {
    createPostSave = await postSave.create({
      data: {
        userId: userId,
        postId: Data.postId,
      },
    });
  } else {
    const savePostCount = await postSave.count({
      where: {
        userId: userId,
      },
    });
    if (savePostCount < SAVEPOSTLIMIT) {
      createPostSave = await postSave.create({
        data: {
          userId: userId,
          postId: Data.postId,
        },
      });
    }
  }

  res.status(StatusCodes.CREATED).json(createPostSave);
});

//  retrive  ad ************************************
const getAds = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);
  const skip = parseInt(req.headers.skip);
  const take = parseInt(req.headers.take);
  let Ads = {};
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

  const isShowAd = await client.query(
    'SELECT "showAd" FROM public."premiumPackageSubscribe" WHERE "userId" = $1 AND "endDate" > Date(NOW());',
    [userId]
  );

  if (isShowAd.rows[0].showAd) {
    Ads = await advertisement.findMany({
      skip,
      take,
    });
  }
  // console.log(isShowAd);
  await client.end();
  res.json(Ads);
});

//  upload a comment report ***************
const uploadCommentReport = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);
  const Data = req.body;
  const newCommentReport = await commentReport.create({
    data: {
      userId: userId,
      advertisemenreportedCommentIdtId: Data.commentId,
      reportCategory: Data.category,
      description: Data.description,
    },
  });
  res.status(StatusCodes.CREATED).json(newCommentReport);
});

//  upload a post report ***************
const uploadAdReport = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);
  const Data = req.body;
  const CreateAdReport = await advertisementReport.create({
    data: {
      userId: userId,
      advertisementId: Data.adId,
      reportCategory: Data.category,
      description: Data.description,
    },
  });
  res.status(StatusCodes.CREATED).json(CreateAdReport);
});

//  upload a post report ***************
const uploadPostReport = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);
  const Data = req.body;
  const CreatepostReport = await postReport.create({
    data: {
      userId: userId,
      reportedPostId: Data.postId,
      reportCategory: Data.category,
      description: Data.description,
    },
  });
  res.status(StatusCodes.CREATED).json(CreatepostReport);
});

//  upload a commentReaction ***************
const uploadcommentReaction = asyncHandler(async (req, res) => {
  const Data = req.body;
  const CreatecommentReaction = await commentReaction.create({
    data: {
      userId: Data.commenterId,
      commentId: Data.commentId,
    },
  });
  res.status(StatusCodes.CREATED).json(CreatecommentReaction);
});

//  upload a postReaction ***************
const uploadpostReaction = asyncHandler(async (req, res) => {
  const Data = req.body;
  const CreatepostReaction = await postReaction.create({
    data: {
      userId: Data.commenterId,
      postId: Data.postId,
    },
  });
  res.status(StatusCodes.CREATED).json(CreatepostReaction);
});

//  upload a comment ***************
const uploadComment = asyncHandler(async (req, res) => {
  const Data = req.body;
  const CreateComment = await comment.create({
    data: {
      userId: Data.commenterId,
      postId: Data.postId,
      description: Data.description,
    },
  });
  res.status(StatusCodes.CREATED).json(CreateComment);
});

//upload POST IMAGE start*************************************
const uploadPost = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);
  const CreatePost = await post.create({
    data: {
      creatorId: userId,
      imagevideo: req.file.filename,
      description: req.body.desc,
    },
  });
  res.status(StatusCodes.CREATED).json(CreatePost);
});

//  get a comments  ***************
const getComments = asyncHandler(async (req, res) => {
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

  const postId =  parseInt(req.headers.postid);

  await client.connect();
   const comments = await client.query({
    text: `SELECT comments.*,"user"."name","user"."profilePhoto" FROM 
            (SELECT comment.* 
              FROM comment
               WHERE
               (comment."postId" = $1 and comment."blockedStatus"= false)
            ) as comments
           LEFT OUTER JOIN
           "user" on ("user"."userId" = comments."userId" and "user"."blockedStatus"= false) ORDER BY "commentId" DESC`,
    values: [postId],
  });
   await client.end();

  res.json(comments.rows);
});

//  retrive  posts ************************************
const getPosts = asyncHandler(async (req, res) => {
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

  const userId = parseInt(req.headers.userid);
  const skip = parseInt(req.headers.skip);
  const take = parseInt(req.headers.take);

  await client.connect();

  const posts = await client.query({
    // text: 'SELECT * FROM post WHERE "creatorId" IN (SELECT "creatorId" FROM "userSubscribe" WHERE "followerId"=$1 UNION SELECT $1 AS "creatorId") ORDER BY "postId" DESC LIMIT $2 OFFSET $3',
    text: `SELECT posts.*,"user"."name","user"."profilePhoto" FROM (
            SELECT * FROM post 
             WHERE 
              ("creatorId" IN (SELECT "creatorId" FROM "userSubscribe" WHERE "followerId"=$1 UNION SELECT $1 AS "creatorId") 
              AND 
              post."blockedStatus" = false)) as posts,"user" WHERE ("user"."userId" = posts."creatorId" and "user"."blockedStatus"= false) 
            ORDER BY "postId" DESC LIMIT $2 OFFSET $3`,
    values: [userId, take, skip],
  });

 

  await client.end();

  res.json(posts.rows);
});

module.exports = {
  uploadPostSave,
  getAds,
  uploadCommentReport,
  uploadAdReport,
  uploadPostReport,
  uploadcommentReaction,
  uploadpostReaction,
  uploadComment,
  uploadPost,
  getComments,
  getPosts,
};
