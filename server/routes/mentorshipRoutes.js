const express = require("express");
const router = express.Router();
const Mentorship = require("../models/Mentorship");

// Add Request
router.post("/add", async (req, res) => {
  try {
    const mentorship = await Mentorship.create(req.body);
    res.status(201).json(mentorship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Requests
router.get("/", async (req, res) => {
  try {
    const mentorships = await Mentorship.find();
    res.status(200).json(mentorships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Request
router.get("/:id", async (req, res) => {
  try {
    const mentorship = await Mentorship.findById(req.params.id);

    if (!mentorship) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    res.status(200).json(mentorship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Request
router.put("/:id", async (req, res) => {
  try {
    const mentorship = await Mentorship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!mentorship) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    res.status(200).json(mentorship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Request
router.delete("/:id", async (req, res) => {
  try {
    const mentorship = await Mentorship.findByIdAndDelete(
      req.params.id
    );

    if (!mentorship) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    res.status(200).json({
      message: "Request deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;