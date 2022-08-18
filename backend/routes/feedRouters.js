const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

const { upload } = require("../middleware/fileUpload");

// import controllers
const {
  uploadAdReport,
  uploadPostReport,
  uploadcommentReaction,
  uploadpostReaction,
  uploadComment,
  uploadPost,
  getPosts,
} = require("../controllers/feedController");

const router = express.Router();

router.post("/uploadAdReport", validateToken, uploadAdReport);

router.post("/uploadPostReport", validateToken, uploadPostReport);

router.post("/uploadcommentReaction", validateToken, uploadcommentReaction);

router.post("/uploadpostReaction", validateToken, uploadpostReaction);

router.post("/uploadComment", validateToken, uploadComment);

router.post("/uploadPost", validateToken, upload.single("file"), uploadPost);

// id : userId
router.get("/getPosts", validateToken, getPosts);

module.exports = router;
