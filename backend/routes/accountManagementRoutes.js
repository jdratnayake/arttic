const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const { initial } = require("../controllers/accountManagementController");

const router = express.Router();

// define specific routes
router.get("/", validateToken, initial);

module.exports = router;
