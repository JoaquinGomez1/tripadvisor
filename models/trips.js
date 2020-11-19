const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  score: { type: Number, required: false },
  comments: { type: Array, required: false, default: [] },
  author: { type: mongoose.Types.ObjectId, required: false }, // This is set in the server side
});

module.exports = mongoose.model("trips", schema);
