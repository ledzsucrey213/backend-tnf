const mongoose = require("mongoose");

const AudioSchema = new mongoose.Schema({
  title: String,
  url: String,
  duration: Number,
});

module.exports = mongoose.model("Audio", AudioSchema);
