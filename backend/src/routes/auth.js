// backend/src/routes/auth.js
const express = require("express");
const router = express.Router();

// POST /api/login
router.post("/", (req, res) => {
  const { username, password } = req.body;

  // Demo credentials
  if (username === "admin" && password === "admin123") {
    return res.json({ success: true, username: "admin" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

module.exports = router;