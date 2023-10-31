require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error Connecting to MongoDB");
  });

app.listen(port, () => {
  console.log("server is running on port 3000");
});

const Post = require("./models/post");

app.post("/post", async (req, res) => {
  try {
    const {
      image,
      price,
      type,
      place,
      numberOfBed,
      title,
      description,
      numberOfBath,
      numberOfGarage,
      propertySize,
      status,
      ref,
    } = req.body;

    const newPost = new Post({
      image,
      price,
      type,
      place,
      numberOfBed,
      title,
      description,
      numberOfBath,
      numberOfGarage,
      propertySize,
      status,
      ref,
    });

    const savedPost = await newPost.save();
    res.status(200).json({ message: "Post successful", data: savedPost });
  } catch (error) {
    console.error("Error posting", error);
    res.status(500).json({ message: "Error posting", error: error.message });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find(); // Retrieve all posts from the database
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error retrieving posts", error);
    res
      .status(500)
      .json({ message: "Error retrieving posts", error: error.message });
  }
});
