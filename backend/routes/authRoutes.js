const express = require("express");

// import controllers
const { register, login } = require("../controllers/authController");

const router = express.Router();

// define specific routes
router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
