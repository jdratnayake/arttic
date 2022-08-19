const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");
const { Client } = require("pg");

const { post, advertisement, comment, postReaction, commentReaction , postReport, advertisementReport, commentReport, premiumPackageSubscribe, postSave} = new PrismaClient();

//  upload a favorite post ***************
const uploadPostSave = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);

  const IsUserSubscribeId =  await premiumPackageSubscribe.findMany({
    where:{
      userId:userId,
      endDate:{
        gt:new Date()
      },
    },
    select:{
      userSubscribeId:true
    }
  });

  if( IsUserSubscribeId !== undefined || IsUserSubscribeId !== null){
    const CreatepostReport = await postSave.create({
      data: {
        userId: userId,
        postId: Data.postId,
      },
    });
  }else{
    
  }
  
  res.status(StatusCodes.CREATED).json(CreatepostReport);
});

//  retrive  ad ************************************
const getAds = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);
  const skip = parseInt(req.headers.skip);
  const take = parseInt(req.headers.take);

  const isShowAd =  await premiumPackageSubscribe.findMany({
    where:{
      userId:userId,
      endDate:{
        gt:new Date()
      },
      // adStatus:1
    },
    // select:{
    //   adStatus:true
    // }
  });

  // if( isShowAd !== undefined || isShowAd !== null){
  //   const Ads = await advertisement.findMany({
  //       skip,
  //       take,
  //     });
  // }
  // console.log(isShowAd);
  res.json(isShowAd);
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

  const result = await client.query({
    text: 'SELECT * FROM post WHERE "creatorId" IN (SELECT "creatorId" FROM "userSubscribe" WHERE "followerId"=$1 UNION SELECT $1 AS "creatorId") ORDER BY "postId" DESC LIMIT $2 OFFSET $3',
    values: [userId, take, skip],
  });
  await client.end();

  // need to update the postView
  res.json(result.rows);
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
  getPosts,
};
