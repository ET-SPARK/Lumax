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

// get specific a post
app.get("/post/:postId", async (req, res) => {
  try {
    const postId = req.params.postId; // Retrieve the postId from the URL parameters
    const post = await Post.findById(postId); // Retrieve the post with the specified postId from the database

    if (!post) {
      // If no post is found with the given postId, return a 404 response
      return res.status(404).json({ message: "Post not found" });
    }

    // If a post is found, return it as a JSON response
    res.status(200).json(post);
  } catch (error) {
    console.error("Error retrieving post", error);
    res
      .status(500)
      .json({ message: "Error retrieving post", error: error.message });
  }
});

// Update a post
app.put("/post/:id", async (req, res) => {
  const postId = req.params.id;
  const updatedPostData = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(postId, updatedPostData, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Post updated successfully", data: updatedPost });
  } catch (error) {
    console.error("Error updating post", error);
    res
      .status(500)
      .json({ message: "Error updating post", error: error.message });
  }
});

// Delete a post
app.delete("/post/:id", async (req, res) => {
  const postId = req.params.id;

  try {
    await Post.findByIdAndRemove(postId);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post", error);
    res
      .status(500)
      .json({ message: "Error deleting post", error: error.message });
  }
});
