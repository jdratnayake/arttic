const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");

const { post, comment } = new PrismaClient();


//  upload a comment ***************

const uploadComment = asyncHandler(async (req, res) => {
    // console.log(req.headers);
    console.log(req.body);
    const userId = parseInt(req.headers.userid);
    res.send("Single FIle upload success");
    // const CreateComment = await comment.create({
    //   data: {
    //     userId: userId,
    //     postId: req.file.filename,
    //     description: req.body.desc
    //   },
    // });
    // res.status(StatusCodes.CREATED).json(CreatePost);
  });

//upload POST IMAGE start************************************* 

const uploadPost = asyncHandler(async (req, res) => {
  // console.log(req.body.desc);
  const userId = parseInt(req.headers.userid);
  // res.send("Single FIle upload success");
  const CreatePost = await post.create({
    data: {
      creatorId: userId,
      imagevideo: req.file.filename,
      description: req.body.desc
    },
  });
  res.status(StatusCodes.CREATED).json(CreatePost);
});

//upload POST IMAGE ends************************************* 

const getPosts = asyncHandler(async(req,res) =>{
    // console.log(req.headers.skip);
    const userId = parseInt(req.headers.userid);
    const skip = parseInt(req.headers.skip)
    const take = parseInt(req.headers.take)
    const history = await post.findMany({
      skip:skip,
      take:take,
      where: {
        creatorId: userId,
      },
      orderBy: {
        publishedDate: "desc",
      },
    });
    // res.json(req);
    console.log(history)
})

module.exports = {
    uploadComment,
    uploadPost,
    getPosts,
};
