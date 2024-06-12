const express = require("express");
const {
  getIndustries,
  addIndustry,
  getIndustryById,
} = require("../controller/industryController");
const router = express.Router();
router.get("/getIndustries", getIndustries);
router.post("/addIndustry", addIndustry);
router.get("/industry/:id", getIndustryById);
module.exports = router;
