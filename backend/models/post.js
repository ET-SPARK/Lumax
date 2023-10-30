const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image: {
    type: String, // Assuming image is stored as a URL
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  numberOfBed: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  numberOfBath: {
    type: String,
    required: true,
  },
  numberOfGarage: {
    type: String,
    required: true,
  },
  propertySize: {
    type: String, // You can use a specific data type that represents the size
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
