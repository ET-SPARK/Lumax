const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  // image: {
  //   type: String, // Assuming image is stored as a URL
  //   required: true,
  // },
  // image2: {
  //   type: String, // Assuming image is stored as a URL
  //   required: true,
  // },
  // image3: {
  //   type: String, // Assuming image is stored as a URL
  //   required: true,
  // },
  // image4: {
  //   type: String, // Assuming image is stored as a URL
  //   required: true,
  // },
  // image5: {
  //   type: String, // Assuming image is stored as a URL
  //   required: true,
  // },
  images: {
    type: [String], // Assuming images are stored as URLs in an array
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
    type: String,
    required: true,
  },
  landSize: {
    type: String,
    required: true,
  },
  status: {
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

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;
