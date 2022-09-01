const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getFollowerAnalytics,
} = require("../controllers/creatorAnalyticsController");

const router = express.Router();

// define specific routes
router.get("/getfolloweranalytics", validateToken, getFollowerAnalytics);

module.exports = router;
