const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  score: { type: Number, required: false, min: 1, max: 5 },
  comments: { type: Array, required: false, default: [] },
  author: { type: mongoose.Types.ObjectId, required: false },
  bookedAt: { type: Array, required: false },
  currentlyBooked: { type: Boolean, required: false, default: false },
});

module.exports = mongoose.model("trips", schema);
