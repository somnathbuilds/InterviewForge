const mongoose = require("mongoose");

const RevisionScheduleSchema = new mongoose.Schema(
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
    notes: {
      type: String,
      default: ""
    },
    nextReviewDate: {
      type: Date,
      required: true,
      index: true
    },
    intervalDays: {
      type: Number,
      default: 1
    },
    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

// Create compound index for querying revision schedules for a user
RevisionScheduleSchema.index({ user: 1, problemId: 1 });

module.exports = mongoose.model("RevisionSchedule", RevisionScheduleSchema);
