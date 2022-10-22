const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getAdvertisments,
  verifyAdvertisement,
} = require("../controllers/advertismentReviewController");

const router = express.Router();

// define specific routes
router.get("/getadvertisments", validateToken, getAdvertisments);
router.get("/verifyadvertisement", validateToken, verifyAdvertisement);
// router.post("/registerbillingaddress", validateToken, registerBillingAddress);

module.exports = router;
