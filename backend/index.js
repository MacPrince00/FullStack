const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const product = require("./routes/routes");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");   

app.use(cors());
app.use(express.json());
app.use("/api/v1", product);

//Database Connection with MongoDB

const start = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.error("MongoDB connection error:", err));

    app.listen(port, "0.0.0.0", (error) => {
      if (!error) {
        console.log(`Server Running on Port ${port}...`);
      } else {
        console.log("Error: " + error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

start();

//Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Creating upload endpoint for images
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file.filename);
  res.status(201).json({
    success: 1,
    image_url: `https://fullstack-backend-bqsv.onrender.com/${req.file.filename}`,
  });
});
