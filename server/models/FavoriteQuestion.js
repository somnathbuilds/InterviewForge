const mongoose = require("mongoose");

const FavoriteQuestionSchema = new mongoose.Schema(
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
    timestamps: { createdAt: "starredAt", updatedAt: false }
  }
);

// Create compound index for querying favorites status for a user
FavoriteQuestionSchema.index({ user: 1, problemId: 1 }, { unique: true });

module.exports = mongoose.model("FavoriteQuestion", FavoriteQuestionSchema);
