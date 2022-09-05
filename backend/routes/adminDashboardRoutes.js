const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getDashboardDetails,
  getTransactionDetails,
} = require("../controllers/adminDashboardController");

const router = express.Router();

// define specific routes
router.get("/", validateToken, getDashboardDetails);
router.get("/gettransactiondetails", validateToken, getTransactionDetails);

module.exports = router;
