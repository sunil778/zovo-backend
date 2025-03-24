const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");

// Login route
router.post("/login", authController.login);

// Profile route (protected)
router.get("/profile", authenticateToken, authController.getProfile);

module.exports = router;
