const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  title: String,
  url: String,
  duration: Number,
});

module.exports = mongoose.model("Video", VideoSchema);
