const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const { getPurchaseHistory } = require("../controllers/settingsController");

const router = express.Router();

// define specific routes
router.get("/getPurchaseHistory/:id", getPurchaseHistory);

module.exports = router;
