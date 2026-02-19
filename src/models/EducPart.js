const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
  title: String,
  video_url: String,
  article_url: String,
});

const EducPartSchema = new mongoose.Schema({
  title: String,
  sections: [SectionSchema],
});

module.exports = mongoose.model("EducPart", EducPartSchema);
