const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getPurchaseHistory,
  registerBillingAddress,
  getBillingAddresses,
  payment,
} = require("../controllers/settingsController");

const router = express.Router();

// define specific routes
router.get("/getPurchaseHistory/:id", validateToken, getPurchaseHistory);
router.post("/registerbillingaddress", validateToken, registerBillingAddress);
router.get("/getbillingaddresses/:id", validateToken, getBillingAddresses);
router.post("/payment", validateToken, payment);

module.exports = router;
