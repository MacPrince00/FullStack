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
app.use("/images", express.static(path.join(__dirname, 'upload', 'images')));

  const baseUrl = `${req.protocol}://${req.hostname}`;


app.post("/upload", upload.single("image"), (req, res) => {
  res.status(201).json({
    success: 1,
    image_url: `${baseUrl}/${req.file.filename}`,
  });
  
     console.log(image_url);
});
