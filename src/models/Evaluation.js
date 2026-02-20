const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["stress", "douleur", "humeur"],
      required: true,
    },
    note: {
      type: Number,
      required: false,
    },
    humeur: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // ajoute createdAt et updatedAt
  }
);

module.exports = mongoose.model("Evaluation", EvaluationSchema);
