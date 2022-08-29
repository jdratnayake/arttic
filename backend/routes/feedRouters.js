const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

const { upload } = require("../middleware/fileUpload");

// import controllers
const {
  uploadPostSave,
  getAds,
  uploadCommentReport,
  uploadAdReport,
  uploadPostReport,
  uploadCommentReaction,
  uploadpostReaction,
  uploadComment,
  uploadPost,
  getComments,
  getPosts,
} = require("../controllers/feedController");

const router = express.Router();

router.post("/uploadPostSave", validateToken, uploadPostSave);

router.post("/uploadCommentReport", validateToken, uploadCommentReport);

router.post("/uploadAdReport", validateToken, uploadAdReport);

router.post("/uploadPostReport", validateToken, uploadPostReport);

router.post("/uploadcommentReaction", validateToken, uploadCommentReaction);

router.post("/uploadpostReaction", validateToken, uploadpostReaction);

router.post("/uploadComment", validateToken, uploadComment);

router.post("/uploadPost", validateToken, upload.single("file"), uploadPost);

router.get("/getComments", validateToken, getComments);

router.get("/getPosts", validateToken, getPosts);

router.get("/getAds", validateToken, getAds);

module.exports = router;
