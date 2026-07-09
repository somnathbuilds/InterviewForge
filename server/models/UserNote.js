const mongoose = require("mongoose");

const UserNoteSchema = new mongoose.Schema(
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
    content: {
      type: String,
      required: [true, "Please add some notes content"]
    }
  },
  {
    timestamps: true
  }
);

// Create compound index for querying notes for a user
UserNoteSchema.index({ user: 1, problemId: 1 }, { unique: true });

module.exports = mongoose.model("UserNote", UserNoteSchema);
