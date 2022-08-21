const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

const { getChatHistory } = require("../controllers/chatController");

const router = express.Router();

router.get("/getchathistory/:id", validateToken, getChatHistory);

module.exports = router;
