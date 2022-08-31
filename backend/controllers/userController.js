const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

const { user, followerCreator } = new PrismaClient();

//upload profile photos --------------------------------------------------
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
//end upload profile photos ----------------------------------


//get user details --------------------------------------------
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
//end get user details ----------------------------------------



//check username-----------------------------------------------
const checkUserName = asyncHandler(async (req, res) => {
  const userName = req.params.name;
  const userId = parseInt(req.headers.userid);

  const existUser = await user.findMany({
    where: {
      AND: [
        { username: userName },
        { NOT: { userId: userId, } }
      ],
    },

    include: {
      followerCreator: true,
    },
  });

  //console.log(existUser);

  if (existUser.length !== 0) {
    res.json({
      status: "NO"
    });
  } else {
    res.json({
      status: "YES"
    });
  }
});
//end check username--------------------------------------------------------



//update user details ------------------------------------------------------
const updateUserDetails = asyncHandler(async (req, res) => {
  const userId = parseInt(req.headers.userid);

  let { name, username, bio } = req.body;

  const updateUser = await user.findUnique({
    where: {
      userId: userId,
    },
  });

  if (updateUser) {
    await user.update({
      where: {
        userId: userId,
      },
      data: {
        name: name,
        username: username,
        bio: bio,
      },
    });
    res.json({
      msg: "Profile details updated",
    });
  }
  else {
    res.json({
      msg: "Error!",
    });
  }
});
//end update user details --------------------------------------------


module.exports = {
  uploadProfileOrCoverPicture,
  getUserDetails,
  checkUserName,
  updateUserDetails,
};
