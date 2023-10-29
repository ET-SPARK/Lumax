const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  number_of_rooms: {
    type: Number,
    required: true,
  },
  size_of_house: {
    type: String, // You can use a specific data type that represents the size
    required: true,
  },
  description: {
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
