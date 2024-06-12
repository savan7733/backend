const Industry = require("../models/IndustrySchema");
const addSolutionPackage = async (req, res) => {
  const { industryId, solutionId, newPackageData } = req.body;
  try {
    await Industry.updateOne(
      { _id: industryId, "solutions._id": solutionId },
      { $push: { "solutions.$.solutionPackage": newPackageData } }
    );
    res.status(200).json({
      success: true,
      data: "added successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

const getSolutionPackagesBySolutionId = async (req, res) => {
  const { industryId, solutionId } = req.params;
  try {
    const industry = await Industry.findById(industryId);
    if (!industry) {
      return res.status(404).json({
        success: false,
        error: "Industry not found",
      });
    }

    // Find the solution within the industry
    const solution = industry.solutions.find(
      (sol) => sol._id.toString() === solutionId
    );
    if (!solution) {
      return res.status(404).json({
        success: false,
        error: "Solution not found in this industry",
      });
    }

    // Return the solution packages of the found solution
    res.status(200).json({
      success: true,
      data: solution.solutionPackage,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
module.exports = { addSolutionPackage, getSolutionPackagesBySolutionId };
