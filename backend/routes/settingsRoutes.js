const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getPurchaseHistory,
  registerBillingAddress,
} = require("../controllers/settingsController");

const router = express.Router();

// define specific routes
router.get("/getPurchaseHistory/:id", validateToken, getPurchaseHistory);
router.post("/registerbillingaddress", validateToken, registerBillingAddress);

module.exports = router;
