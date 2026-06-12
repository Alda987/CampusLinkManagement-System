const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Add Job
router.post("/add", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const job = await Job.create(req.body);

    res.status(201).json(job);
  } catch (error) {
    console.log("Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// Get All Jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();

    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// Get Single Job
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json(job);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// Update Job
router.put("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json(job);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// Delete Job
router.delete("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;