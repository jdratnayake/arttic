const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

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

const checkUserName = asyncHandler(async (req, res) => {
  const userName = req.params.name;

  const existUser = await user.findUnique({
    where: {
      username: userName,
    },
    include: {
      followerCreator: true,
    },
  });

  res.json(existUser);
});

module.exports = {
  uploadProfileOrCoverPicture,
  getUserDetails,
  checkUserName,
};
