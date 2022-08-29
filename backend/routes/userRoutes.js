const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

const { upload } = require("../middleware/fileUpload");

// import controllers
const {
  uploadProfileOrCoverPicture,
  getUserDetails,
  uploadUserReport,
} = require("../controllers/userController");

const router = express.Router();

router.post(
  "/uploadprofileorcoverpicture",
  validateToken,
  upload.single("file"),
  uploadProfileOrCoverPicture
);
router.get("/getuserdetails/:id", validateToken, getUserDetails);

router.post("/uploadUserReport", validateToken, uploadUserReport);

module.exports = router;
