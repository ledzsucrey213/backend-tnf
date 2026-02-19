const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  title: String,
  video_url: String,
  audio_url: String,
});

const ModuleSchema = new mongoose.Schema({
  title: String,
  video_url: String,
  audio_url: String,
  article_url: String,
  exercises: [ExerciseSchema],
});

const OutilsSchema = new mongoose.Schema({
  title: String,
  modules: [ModuleSchema],
});

module.exports = mongoose.model("Outils", OutilsSchema);
