const mongoose = require("mongoose");

const mentorshipSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    alumniName: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Mentorship",
  mentorshipSchema
);