const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getUserComplaints,
  getPostComplaints,
  getCommentComplaints,
  getAdvertismentComplaints,
  resolveComplaint,
  getReportUserDetails,
  getReportPostDetails,
  getReportCommentDetails,
  getReportAdvertismentDetails,
  blockUser,
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
router.get("/getreportuserdetails", validateToken, getReportUserDetails);
router.get("/getreportpostdetails", validateToken, getReportPostDetails);
router.get("/getreportcommentdetails", validateToken, getReportCommentDetails);
router.get(
  "/getreportadvertismentdetails",
  validateToken,
  getReportAdvertismentDetails
);
router.post("/blockuser", validateToken, blockUser);

module.exports = router;
