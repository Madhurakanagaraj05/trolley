import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Read products from JSON file
let products = JSON.parse(fs.readFileSync("products.json"));

// Orders array
let orders = [];

// Routes

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin123") {
    return res.json({ success: true, username });
  }
  return res.status(401).json({ success: false, message: "Invalid credentials" });
});

app.get("/api/products", (req, res) => {
  res.json({ success: true, products });
});

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

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});