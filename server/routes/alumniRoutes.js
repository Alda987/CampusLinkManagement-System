const express = require("express");
const router = express.Router();
const Alumni = require("../models/Alumni");

// Add Alumni
router.post("/add", async (req, res) => {
  try {
    const alumni = await Alumni.create(req.body);
    res.status(201).json(alumni);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Alumni
router.get("/", async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.status(200).json(alumni);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Alumni
router.get("/:id", async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.id);

    if (!alumni) {
      return res.status(404).json({
        message: "Alumni not found",
      });
    }

    res.status(200).json(alumni);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Alumni
router.put("/:id", async (req, res) => {
  try {
    const alumni = await Alumni.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!alumni) {
      return res.status(404).json({
        message: "Alumni not found",
      });
    }

    res.status(200).json(alumni);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Alumni
router.delete("/:id", async (req, res) => {
  try {
    const alumni = await Alumni.findByIdAndDelete(req.params.id);

    if (!alumni) {
      return res.status(404).json({
        message: "Alumni not found",
      });
    }

    res.status(200).json({
      message: "Alumni deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;