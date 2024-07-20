const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
   _id: Number,
   oederDate: String,
});

const orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;
