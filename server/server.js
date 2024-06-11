const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const cloudinary = require("cloudinary");

// * CONFIG
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 8001;

// * DATABASE
connectDB();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// * START THE SERVER
app.listen(8000, () => {
  console.log(`Server is up and running on port ${port}`);
});
