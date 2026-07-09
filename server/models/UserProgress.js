const mongoose = require("mongoose");

const UserProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true
    },
    currentStreak: {
      type: Number,
      default: 0
    },
    maxStreak: {
      type: Number,
      default: 0
    },
    lastActiveDate: {
      type: Date,
      default: null
    },
    placementReadiness: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    dsaSolvedCount: {
      type: Number,
      default: 0
    },
    aptitudeSolvedCount: {
      type: Number,
      default: 0
    },
    coreSubjectsSolvedCount: {
      type: Number,
      default: 0
    },
    mockInterviewsCompleted: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("UserProgress", UserProgressSchema);
