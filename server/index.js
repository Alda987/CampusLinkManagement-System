require("dotenv").config();

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

// CORS
app.use(
  cors({
    origin: [
      "https://campus-link-management-system-v26o.vercel.app",
      "https://campus-link-management-sy-git-83d02b-alda-treesa-josys-projects.vercel.app",
      "http://localhost:5173"
    ],
    credentials: true,
  })
);

app.use(express.json());

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
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

// Health Route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    database:
      mongoose.connection.readyState === 1
        ? "Connected"
        : "Disconnected",
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Something went wrong",
    error: err.message,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});