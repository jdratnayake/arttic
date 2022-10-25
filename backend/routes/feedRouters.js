const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

const { upload } = require("../middleware/fileUpload");

// import controllers
const {
  oneTimeNotification,
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
  deletePost,
  deleteComment,
  getFavourites,
  deleteSavePost,
} = require("../controllers/feedController");

const router = express.Router();

router.get("/deleteSavePost", validateToken, deleteSavePost);

router.get("/getFavourites", validateToken, getFavourites);

router.get("/deleteComment", validateToken, deleteComment);

router.get("/deletePost", validateToken, deletePost);

router.post("/oneTimeNotification", validateToken, oneTimeNotification);

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
