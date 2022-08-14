const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { user } = new PrismaClient();

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
  }
});

const getUserDetails = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);

  const existUser = await user.findUnique({
    where: {
      userId: userId,
    },
  });

  res.json(existUser);
});

module.exports = {
  uploadProfileOrCoverPicture,
  getUserDetails,
};
