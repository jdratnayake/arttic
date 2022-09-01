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
  resetPassword,
  getUserState,
  changePassword,
  emailVerificationOtp,
  emailVerificationOtpCheck,
  convertToCreator,
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
router.post("/resetpassword", resetPassword);
router.get("/getuserstate/:id", getUserState);
router.post("/changepassword", validateToken, changePassword);
router.post("/emailverificationotp", emailVerificationOtp);
router.post("/emailverificationotpcheck", emailVerificationOtpCheck);
router.post("/converttocreator", validateToken, convertToCreator);

module.exports = router;
