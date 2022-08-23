const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  initial,
  registerAdmin,
} = require("../controllers/accountManagementController");

const router = express.Router();

// define specific routes
router.get("/", validateToken, initial);
router.post("/registeradmin", validateToken, registerAdmin);

module.exports = router;
