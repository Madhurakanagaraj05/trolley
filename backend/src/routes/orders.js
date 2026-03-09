// backend/src/routes/order.js
const express = require("express");
const { addOrder, getOrderById } = require("../../data/productsStore");

const router = express.Router();

// POST /api/orders
router.post("/", (req, res) => {
  const order = req.body;
  if (!order || !order.items) {
    return res.status(400).json({ success: false, message: "Invalid order" });
  }
  const newOrder = addOrder(order);
  res.json({ success: true, order: newOrder });
});

// GET /api/orders/:id
router.get("/:id", (req, res) => {
  const order = getOrderById(parseInt(req.params.id));
  if (!order) return res.status(404).json({ success: false, message: "Order not found" });
  res.json({ success: true, order });
});

module.exports = router;