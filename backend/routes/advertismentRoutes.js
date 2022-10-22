const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

const { upload } = require("../middleware/fileUpload");

// import controllers
const {
  getAdvertismentTable,
  newAdvertisment,
  deleteAdvertisment,
  payment,
  cryptoPaymentSubscription,
} = require("../controllers/advertismentController");

const router = express.Router();

// define specific routes
router.get("/getadvertismenttable/:id", validateToken, getAdvertismentTable);
router.post(
  "/newadvertisment",
  validateToken,
  upload.single("file"),
  newAdvertisment
);
router.get("/deleteadvertisment", validateToken, deleteAdvertisment);
router.post("/payment", validateToken, payment);
router.post("/cryptopayment", validateToken, cryptoPaymentSubscription);

module.exports = router;
