const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  venue: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  image: {
    type: String,
  },

  organizer: {
    type: String,
  },

  category: {
    type: String,
  },

  registrationLink: {
    type: String,
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);