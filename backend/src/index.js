// backend/src/index.js
const express = require("express");
const cors = require("cors");

// Import routers
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes); // All products + barcode lookup
app.use("/api/orders", orderRoutes);     // Add / get orders
app.use("/api/login", authRoutes);       // Login route

// Root route
app.get("/", (req, res) => {
  res.json({ success: true, message: "Smart Barcode Billing Backend Running" });
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});// backend/src/index.js
const express = require("express");
const cors = require("cors");

// Import routers
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes); // All products + barcode lookup
app.use("/api/orders", orderRoutes);     // Add / get orders
app.use("/api/login", authRoutes);       // Login route

// Root route
app.get("/", (req, res) => {
  res.json({ success: true, message: "Smart Barcode Billing Backend Running" });
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});