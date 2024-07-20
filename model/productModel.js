const mongoose = require("mongoose");

const productSchema = new mongoose.model({
   _id: Number,
   Name: String,
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
