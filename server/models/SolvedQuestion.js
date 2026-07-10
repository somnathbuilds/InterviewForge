const mongoose = require("mongoose");

const SolvedQuestionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    problemId: {
      type: Number,
      required: true
    },
    problemName: {
      type: String,
      required: true
    },
    leetcodeUrl: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true
    },
    topic: {
      type: String,
      required: true
    },
    companies: {
      type: [String],
      required: true,
      default: []
    }
  },
  {
    timestamps: { createdAt: "solvedAt", updatedAt: false }
  }
);

// Create compound index for querying solved status for a user
SolvedQuestionSchema.index({ user: 1, problemId: 1 }, { unique: true });

module.exports = mongoose.model("SolvedQuestion", SolvedQuestionSchema);
