// index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS to allow cross-origin requests from the React frontend
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");

// Use Auth Routes
app.use("/api/auth", authRoutes);

// Root route for testing
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the Express server
// Make sure the server listens on all network interfaces (0.0.0.0)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
