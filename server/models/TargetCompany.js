const mongoose = require("mongoose");

const TargetCompanySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    companyKey: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true
    },
    matchScore: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    isTarget: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

// Create compound index for querying target companies for a user
TargetCompanySchema.index({ user: 1, companyKey: 1 }, { unique: true });

module.exports = mongoose.model("TargetCompany", TargetCompanySchema);
