const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    batch: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    photo: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Alumni",
  alumniSchema
);