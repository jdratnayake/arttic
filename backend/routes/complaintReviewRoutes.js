const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getUserComplaints,
} = require("../controllers/complaintReviewController");

const router = express.Router();

// define specific routes
router.get("/getusercomplaints", validateToken, getUserComplaints);
// router.post("/registerbillingaddress", validateToken, registerBillingAddress);

module.exports = router;
