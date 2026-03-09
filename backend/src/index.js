// backend/src/index.js
const express = require("express");
const cors = require("cors");

// Import routers
const productRoutes = require("./routes/products"); // make sure file name matches exactly
const orderRoutes = require("./routes/order");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/login", authRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ success: true, message: "Smart Barcode Billing Backend Running" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});