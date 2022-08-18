const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

const { upload } = require("../middleware/fileUpload");

// import controllers
const {
    getAdvertismentTable,
    newAdvertisment,
} = require("../controllers/advertismentController");

const router = express.Router();

// define specific routes
router.get("/getadvertismenttable/:id", validateToken, getAdvertismentTable);
router.post("/newadvertisment", validateToken, upload.single("file"), newAdvertisment);

module.exports = router;