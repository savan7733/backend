const express = require("express");
const { addSolution } = require("../controller/solutionController");
const router = express.Router();
router.post("/addSolution", addSolution);
module.exports = router;
