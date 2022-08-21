const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

const {
  getChatHistory,
  getSubscribeCreators,
} = require("../controllers/chatController");

const router = express.Router();

router.get("/getchathistory/:id", validateToken, getChatHistory);
router.get("/getsubscribecreators/:id", validateToken, getSubscribeCreators);

module.exports = router;
