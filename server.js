const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const addDefaultSampleData = require("./config/feedDefaultData");
const industryRoute = require("./routes/industryRoutes");
const solutionRoute = require("./routes/solutionRoutes");
const solutionPackageRoute = require("./routes/solutionPackageRoute");
const adminRoute = require("./routes/adminRoutes");
const supportRoute = require("./routes/supportRoute");
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();
app.use("/uploads", express.static("uploads"));

app.use("/api/industries", industryRoute);
app.use("/api/solutions", solutionRoute);
app.use("/api/solutionPackages", solutionPackageRoute);
app.use("/api/support", supportRoute);
app.use("/api/auth", adminRoute);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
