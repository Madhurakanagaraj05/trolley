// src/index.js
const express = require("express");
const cors = require("cors");
const { getAllProducts, getProductByBarcode } = require("./data/productsStore");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin123") {
    return res.json({ success: true, username });
  }
  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

// Get all products
app.get("/api/products", (req, res) => {
  try {
    const products = getAllProducts();
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch products" });
  }
});

// Get product by barcode
app.get("/api/products/barcode/:barcode", (req, res) => {
  const { barcode } = req.params;
  if (!barcode || !barcode.trim()) {
    return res.status(400).json({ success: false, message: "Barcode required" });
  }

  const product = getProductByBarcode(barcode);
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  res.json({ success: true, product });
});

// Orders
let orders = [];

app.post("/api/orders", (req, res) => {
  const { items, total } = req.body;
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ success: false, message: "Order must have items" });
  }
  const order = { id: orders.length + 1, items, total, createdAt: new Date() };
  orders.push(order);
  res.json({ success: true, order });
});

app.get("/api/orders", (req, res) => {
  res.json({ success: true, orders });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));