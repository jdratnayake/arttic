const express = require("express");

// import controllers
const { test } = require("../controllers/testController");

const router = express.Router();

router.get("/test", test);

module.exports = router;
