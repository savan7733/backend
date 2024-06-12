const Industries = require("../models/IndustrySchema");
const addIndustry = async (req, res) => {
  const data = req.body;
  try {
    if (!data) {
      res.status(400).json({
        success: false,
        error: "data is required",
      });
    }
    const industry = new Industries(data);
    await industry.save();
    res.status(200).json({
      success: true,
      data: industry,
    });
    console.log("Industry added successfully");
  } catch (error) {
    console.error("Error adding industry", error);
  }
};
const getIndustries = async (req, res) => {
  try {
    const industries = await Industries.find();
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

const getIndustryById = async (req, res) => {
  console.log("body", req.body);
  const { id } = req.params;
  try {
    const industry = await Industries.findById(id);
    if (!industry) {
      return res.status(404).json({
        success: false,
        error: "Industry not found",
      });
    }
    res.status(200).json({
      success: true,
      data: industry,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = { addIndustry, getIndustries, getIndustryById };
