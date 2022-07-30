const express = require("express");

// import controllers
const {
  register,
  login,
  creatorVerify,
  emailCheck,
} = require("../controllers/authController");

const router = express.Router();

// define specific routes
router.route("/emailCheck").post(emailCheck);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/creatorverify").post(creatorVerify);

module.exports = router;
