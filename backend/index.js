require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:5173/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

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

app.get("/", (req, res) => {
  res.json("Hello");
});

const Post = require("./models/post");

app.post("/post", async (req, res) => {
  try {
    const {
      images,
      price,
      type,
      place,
      numberOfBed,
      title,
      description,
      numberOfBath,
      numberOfGarage,
      propertySize,
      landSize,
      status,
      ref,
    } = req.body;

    const newPost = new Post({
      images,
      price,
      type,
      place,
      numberOfBed,
      title,
      description,
      numberOfBath,
      numberOfGarage,
      propertySize,
      landSize,
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

const Sale = require("./models/sale");

app.post("/sale", async (req, res) => {
  try {
    const {
      images,
      price,
      type,
      place,
      numberOfBed,
      title,
      description,
      numberOfBath,
      numberOfGarage,
      propertySize,
      landSize,
      status,
      ref,
    } = req.body;

    const newSale = new Sale({
      images,
      price,
      type,
      place,
      numberOfBed,
      title,
      description,
      numberOfBath,
      numberOfGarage,
      propertySize,
      landSize,
      status,
      ref,
    });

    const savedSale = await newSale.save();
    res.status(200).json({ message: "Sale successful", data: savedSale });
  } catch (error) {
    console.error("Error sale posting", error);
    res
      .status(500)
      .json({ message: "Error sale posting", error: error.message });
  }
});

//get all sales
app.get("/sales", async (req, res) => {
  try {
    const sales = await Sale.find(); // Retrieve all posts from the database
    res.status(200).json(sales);
  } catch (error) {
    console.error("Error retrieving posts", error);
    res
      .status(500)
      .json({ message: "Error retrieving posts", error: error.message });
  }
});

// get specific sale
app.get("/sale/:saleId", async (req, res) => {
  try {
    const saleId = req.params.saleId; // Retrieve the postId from the URL parameters
    const sale = await Sale.findById(saleId); // Retrieve the post with the specified postId from the database

    if (!sale) {
      // If no post is found with the given postId, return a 404 response
      return res.status(404).json({ message: "Sale not found" });
    }

    // If a post is found, return it as a JSON response
    res.status(200).json(sale);
  } catch (error) {
    console.error("Error retrieving sale", error);
    res
      .status(500)
      .json({ message: "Error retrieving sale", error: error.message });
  }
});

//update Sale
app.put("/sale/:id", async (req, res) => {
  const saleId = req.params.id;
  const updatedSaleData = req.body;

  try {
    const updatedSale = await Sale.findByIdAndUpdate(saleId, updatedSaleData, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Sale updated successfully", data: updatedSale });
  } catch (error) {
    console.error("Error updating sale", error);
    res
      .status(500)
      .json({ message: "Error updating sale", error: error.message });
  }
});

// Delete a sale

app.delete("/sale/:id", async (req, res) => {
  const saleId = req.params.id;

  try {
    await Sale.findByIdAndRemove(saleId);
    res.status(200).json({ message: "sale deleted successfully" });
  } catch (error) {
    console.error("Error deleting sale", error);
    res
      .status(500)
      .json({ message: "Error deleting sale", error: error.message });
  }
});

// comments
const Comment = require("./models/comment");

app.post("/comment", async (req, res) => {
  try {
    const { name, email, phone, comments, ref } = req.body;
    const newComment = new Comment({
      name,
      email,
      phone,
      comments,
      ref,
    });

    const savedComment = await newComment.save();
    res
      .status(200)
      .json({ message: "Comment added successfully", data: savedComment });
  } catch (error) {
    console.error("Error adding comment", error);
    res
      .status(500)
      .json({ message: "Error adding comment", error: error.message });
  }
});

// Sale comments
const SaleComment = require("./models/saleComment");

app.post("/saleComment", async (req, res) => {
  try {
    const { name, email, phone, comments, ref } = req.body;
    const newComment = new SaleComment({
      name,
      email,
      phone,
      comments,
      ref,
    });

    const savedComment = await newComment.save();
    res
      .status(200)
      .json({ message: "Sale Comment added successfully", data: savedComment });
  } catch (error) {
    console.error("Error adding comment", error);
    res
      .status(500)
      .json({ message: "Error adding comment", error: error.message });
  }
});

// Contact
const Contact = require("./models/contact");

app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, area, comments, dropdown } = req.body;
    const newContact = new Contact({
      name,
      email,
      phone,
      area,
      comments,
      dropdown,
    });

    const savedContact = await newContact.save();
    res
      .status(200)
      .json({ message: "Sale Comment added successfully", data: savedContact });
  } catch (error) {
    console.error("Error adding comment", error);
    res
      .status(500)
      .json({ message: "Error adding comment", error: error.message });
  }
});

// get contacts
app.get("/contact", async (req, res) => {
  try {
    const contacts = await Contact.find(); // Retrieve all contacts from the database
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error retrieving contacts", error);
    res
      .status(500)
      .json({ message: "Error retrieving contacts", error: error.message });
  }
});

//delete contact
app.delete("/contact/:id", async (req, res) => {
  const contactId = req.params.id;

  try {
    await Contact.findByIdAndRemove(contactId);
    res.status(200).json({ message: "contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact", error);
    res
      .status(500)
      .json({ message: "Error deleting contact", error: error.message });
  }
});

// get sale comment
app.get("/saleComment", async (req, res) => {
  try {
    const saleComments = await SaleComment.find(); // Retrieve all contacts from the database
    res.status(200).json(saleComments);
  } catch (error) {
    console.error("Error retrieving contacts", error);
    res
      .status(500)
      .json({ message: "Error retrieving contacts", error: error.message });
  }
});

//delete sale comment
app.delete("/saleComment/:id", async (req, res) => {
  const saleCommentId = req.params.id;

  try {
    await SaleComment.findByIdAndRemove(saleCommentId);
    res.status(200).json({ message: "Sale Comment deleted successfully" });
  } catch (error) {
    console.error("Error deleting Sale Comment", error);
    res
      .status(500)
      .json({ message: "Error deleting Sale Comment", error: error.message });
  }
});

// get Rental comment
app.get("/comment", async (req, res) => {
  try {
    const rentalComments = await Comment.find(); // Retrieve all contacts from the database
    res.status(200).json(rentalComments);
  } catch (error) {
    console.error("Error retrieving contacts", error);
    res
      .status(500)
      .json({ message: "Error retrieving contacts", error: error.message });
  }
});

//delete Rental comment
app.delete("/comment/:id", async (req, res) => {
  const rentalCommentsId = req.params.id;

  try {
    await Comment.findByIdAndRemove(rentalCommentsId);
    res.status(200).json({ message: "Rental Comment deleted successfully" });
  } catch (error) {
    console.error("Error deleting Rental Comment", error);
    res
      .status(500)
      .json({ message: "Error deleting Rental Comment", error: error.message });
  }
});
