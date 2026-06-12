const express = require("express");
const router = express.Router();

const Student = require("../models/Student");
const Job = require("../models/Job");
const Post = require("../models/Post");
const Event = require("../models/Event");

router.get("/stats", async (req, res) => {
  try {
    const students = await Student.countDocuments();
    const jobs = await Job.countDocuments();
    const posts = await Post.countDocuments();
    const events = await Event.countDocuments();

    res.json({
      students,
      jobs,
      posts,
      events,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;