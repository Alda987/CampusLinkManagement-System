const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const jobRoutes = require("./routes/jobRoutes");
const eventRoutes = require("./routes/eventRoutes");
const alumniRoutes = require("./routes/alumniRoutes");
const mentorshipRoutes = require("./routes/mentorshipRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "https://campus-link-management-system-v260.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/alumni", alumniRoutes);
app.use("/api/mentorships", mentorshipRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "CampusLink API Running Successfully 🚀",
  });
});

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    database: mongoose.connection.readyState === 1
      ? "Connected"
      : "Disconnected",
  });
});

// Test Route
app.post("/test", (req, res) => {
  console.log("TEST ROUTE HIT");

  res.json({
    success: true,
    message: "Test route working",
    data: req.body,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Something went wrong",
    error: err.message,
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});