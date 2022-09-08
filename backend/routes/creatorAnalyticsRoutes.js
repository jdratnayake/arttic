const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getFollowerAnalytics,
  getPostAnalytics,
  getPostList,
  getAdvertismentAnalytics,
  getAdvertismentList,
  getSinglePostAnalytics,
  getSingleAdvertismentAnalytics,
} = require("../controllers/creatorAnalyticsController");

const router = express.Router();

// define specific routes
router.get("/getfolloweranalytics", validateToken, getFollowerAnalytics);
router.get("/getpostanalytics", validateToken, getPostAnalytics);
router.get("/getpostlist", validateToken, getPostList);
router.get(
  "/getadvertismentanalytics",
  validateToken,
  getAdvertismentAnalytics
);
router.get("/getadvertismentlist", validateToken, getAdvertismentList);
router.get("/getsinglepostanalytics", validateToken, getSinglePostAnalytics);
router.get(
  "/getsingleadvertismentanalytics",
  validateToken,
  getSingleAdvertismentAnalytics
);

module.exports = router;
