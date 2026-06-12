const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
    },

    department: {
      type: String,
    },

    year: {
      type: Number,
    },

    cgpa: {
      type: Number,
    },

    skills: {
      type: String,
    },

    placementStatus: {
      type: String,
      default: "Not Placed",
    },

    linkedin: {
      type: String,
    },

    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Student",
  studentSchema
);