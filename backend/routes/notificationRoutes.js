const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const {
  getNotifications,
  getUnreadNotificationCount,
} = require("../controllers/notificationController");

const router = express.Router();

router.get("/getnotifications", getNotifications);
router.get("/getunreadnotificationcount", getUnreadNotificationCount);

module.exports = router;
