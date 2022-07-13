const express = require("express");

// import controllers
const { register } = require("../controllers/authController");

const router = express.Router();

// define specific routes
router.route("/register").post(register);

module.exports = router;
