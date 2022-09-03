const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getUserComplaints,
  getPostComplaints,
  getCommentComplaints,
  getAdvertismentComplaints,
  resolveComplaint,
} = require("../controllers/complaintReviewController");

const router = express.Router();

// define specific routes
router.get("/getusercomplaints", validateToken, getUserComplaints);
router.get("/getpostcomplaints", validateToken, getPostComplaints);
router.get("/getcommentcomplaints", validateToken, getCommentComplaints);
router.get(
  "/getadvertismentcomplaints",
  validateToken,
  getAdvertismentComplaints
);
router.post("/resolvecomplaint", validateToken, resolveComplaint);

module.exports = router;
