const Solution = require("../models/SolutionSchema");
const Industry = require("../models/IndustrySchema");
const addSolution = async (req, res) => {
  const { industryId, newSolutionData } = req.body;
  try {
    await Industry.updateOne(
      { _id: industryId },
      { $push: { solutions: newSolutionData } }
    );
    res.status(200).json({
      success: true,
      data: "added successfully",
    });
  } catch (error) {
    console.error("Error adding solution", error);
  }
};

const getSolution = async (req, res) => {
  try {
    const industries = await Solution.find();
    res.status(200).json({
      success: true,
      data: industries,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = { addSolution, getSolution };
