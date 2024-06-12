const mongoose = require("mongoose");
const { Schema } = mongoose;

const solutionPackageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const solutionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  solutionPackage: [solutionPackageSchema],
});

const industrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  solutions: [solutionSchema],
});
const Industry = mongoose.model("industry", industrySchema);

module.exports = Industry;
