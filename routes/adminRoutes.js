const express = require("express");
const { adminAuth } = require("../controller/adminController");
const router = express.Router();
router.post("/login", adminAuth);
module.exports = router;
