const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  district: String,
  culture: String,
  imagelink: String,
  discription: String,
  ratingScore: String,
  comments: [{ userName: String, comment: String }],
});

module.exports = mongoose.model("products", productSchema);