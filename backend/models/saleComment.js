const mongoose = require("mongoose");

const saleCommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  ref: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SaleComment = mongoose.model("saleComment", saleCommentSchema);

module.exports = SaleComment;
