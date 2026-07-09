const mongoose = require("mongoose");

const DailyGoalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    title: {
      type: String,
      required: [true, "Please add a goal title"]
    },
    type: {
      type: String,
      enum: ["DSA", "Aptitude", "Core Subjects", "Mock Interview"],
      default: "DSA"
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      required: true,
      index: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("DailyGoal", DailyGoalSchema);
