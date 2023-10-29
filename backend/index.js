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
    // Extract data from the request body
    const { number_of_rooms, size_of_house, description } = req.body;
    // Create a new Post document
    const newPost = new Post({
      number_of_rooms, // Use the data from the request body
      size_of_house, // Use the data from the request body
      description, // Use the data from the request body
    });
    // Save the new document to the database
    const savedPost = await newPost.save();
    // Respond with a success message
    res.status(200).json({ message: "Post successful", data: savedPost });
  } catch (error) {
    console.error("Error posting", error);
    res.status(500).json({ message: "Error posting", error: error.message });
  }
});
