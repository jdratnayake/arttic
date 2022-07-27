const express = require("express");

// import controllers
const {
  register,
  login,
  creatorVerify,
} = require("../controllers/authController");

const router = express.Router();

// define specific routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/creatorverify").post(creatorVerify);

module.exports = router;
