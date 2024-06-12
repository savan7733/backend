const express = require("express");
const {
  addSolutionPackage,
  getSolutionPackagesBySolutionId,
} = require("../controller/solutionPackageController");
const router = express.Router();
router.post("/addSolutionPackage", addSolutionPackage);
router.get(
  "/:industryId/solution/:solutionId",
  getSolutionPackagesBySolutionId
);
module.exports = router;
