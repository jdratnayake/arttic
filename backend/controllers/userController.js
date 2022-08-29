const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const { Client } = require("pg");

const { user, followerCreator } = new PrismaClient();

const uploadProfileOrCoverPicture = asyncHandler(async (req, res) => {
  //   console.log(req.file);
  //   res.send("Single FIle upload success");
  const userId = parseInt(req.headers.userid);
  const uploadFileType = req.headers.uploadfiletype;

  if (uploadFileType === "1") {
    const updateUser = await user.update({
      where: {
        userId: userId,
      },
      data: {
        profilePhoto: req.file.filename,
      },
    });
    res.json({
      statusCode: 1,
      msg: "Profile picture upload success",
    });
  } else if (uploadFileType === "2") {
    const updateUser = await followerCreator.update({
      where: {
        userId: userId,
      },
      data: {
        coverPhoto: req.file.filename,
      },
    });
    res.json({
      statusCode: 1,
      msg: "Cover picture upload success",
    });
  }
});

const getUserDetails = asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id);

  const existUser = await user.findUnique({
    where: {
      userId: userId,
    },
    include: {
      followerCreator: true,
    },
  });

  res.json(existUser);
});

//  upload a user report ***************
const uploadUserReport = asyncHandler(async (req, res) => {
  const Data = req.body;
  console.log(Data)
  // const CreateAdReport = await userReport.create({
  //   data: {
  //     userId: Data.userId,
  //     reportedUserId: Data.reportedUserId,
  //     reportCategory: parseInt(Data.category),
  //     description: Data.description,
  //   },
  // });
  // res.status(StatusCodes.CREATED).json(CreateAdReport);
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
   const comments = await client.query({
    text: `INSERT INTO public."userReport"
    ("userId", "reportedUserId","reportCategory", description)
    VALUES ($1,$2,$3,$4);`,
    values: [Data.userId,Data.reportedUserId,parseInt(Data.category),Data.description],
  });
   await client.end();

  res.json("success");
});

module.exports = {
  uploadProfileOrCoverPicture,
  getUserDetails,
  uploadUserReport,
};
