const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getPurchaseHistory,
  registerBillingAddress,
  getBillingAddresses,
  getPremiumPackageStatus,
  payment,
  cryptoPaymentSubscription,
} = require("../controllers/settingsController");

const router = express.Router();

// define specific routes
router.get("/getPurchaseHistory/:id", validateToken, getPurchaseHistory);
router.post("/registerbillingaddress", validateToken, registerBillingAddress);
router.get("/getbillingaddresses/:id", validateToken, getBillingAddresses);
router.get("/getpremiumpackagestatus", validateToken, getPremiumPackageStatus);
router.post("/payment", validateToken, payment);
router.post(
  "/cryptopaymentsubscription",
  validateToken,
  cryptoPaymentSubscription
);

module.exports = router;
