const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  register,
  login,
  creatorVerify,
  emailCheck,
  usernameCheck,
  forgotPasswordOtp,
  forgotPasswordOtpCheck,
} = require("../controllers/authController");

const router = express.Router();

// define specific routes
router.post("/emailcheck", emailCheck);
router.post("/register", register);
router.post("/login", login);
router.post("/creatorverify", validateToken, creatorVerify);
router.post("/usernamecheck", usernameCheck);
router.post("/forgotpasswordotp", forgotPasswordOtp);
router.post("/forgotpasswordotpcheck", forgotPasswordOtpCheck);

module.exports = router;
