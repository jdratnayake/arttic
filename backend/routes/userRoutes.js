const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

const { upload } = require("../middleware/fileUpload");

// import controllers
const {
  uploadProfileOrCoverPicture,
  getUserDetails,
  checkUserName,
  updateUserDetails,
  uploadUserReport,
  getFollowersDetails,
  getFollowingsDetails,
} = require("../controllers/userController");

const router = express.Router();

router.post(
  "/uploadprofileorcoverpicture",
  validateToken,
  upload.single("file"),
  uploadProfileOrCoverPicture
);
router.get("/getuserdetails/:id", validateToken, getUserDetails);
router.get("/checkusername/:name", validateToken, checkUserName);
router.post("/updateuserdetails", validateToken, updateUserDetails);

router.post("/uploadUserReport", validateToken, uploadUserReport);
router.get("/getfollowersdetails/:id", validateToken, getFollowersDetails);
router.get("/getfollowingsdetails/:id", validateToken, getFollowingsDetails);

module.exports = router;
