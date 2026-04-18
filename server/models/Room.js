const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  maxPeople: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Room", roomSchema);