const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getDashboardDetails,
} = require("../controllers/adminDashboardController");

const router = express.Router();

// define specific routes
router.get("/", validateToken, getDashboardDetails);

module.exports = router;
