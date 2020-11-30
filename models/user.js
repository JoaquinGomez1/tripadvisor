const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: false, default: "member" },
  bookedDates: { type: Date, required: false },
  bookedTrips: { type: Array, required: false },
});

module.exports = mongoose.model("user", schema);
