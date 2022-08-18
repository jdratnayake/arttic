const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

const { upload } = require("../middleware/fileUpload");

// import controllers
const {
    uploadComment,
  uploadPost,
  getPosts,
} = require("../controllers/feedController");

const router = express.Router();

router.post(
    "/uploadComment",
    validateToken,
    uploadComment
  );

router.post(
  "/uploadPost",
  validateToken,
  upload.single("file"),
  uploadPost
);

// id : userId
router.get("/getPosts/:id", validateToken, getPosts);

module.exports = router;
