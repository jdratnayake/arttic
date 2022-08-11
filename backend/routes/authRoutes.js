const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  register,
  login,
  creatorVerify,
  emailCheck,
  usernameCheck,
} = require("../controllers/authController");

const router = express.Router();

// define specific routes
router.post("/emailCheck", emailCheck);
router.post("/register", register);
router.post("/login", login);
router.post("/creatorverify", validateToken, creatorVerify);
router.post("/usernameCheck", usernameCheck);

module.exports = router;
