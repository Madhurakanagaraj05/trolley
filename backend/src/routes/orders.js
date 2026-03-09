const express = require("express");
const { addOrder, getOrderById } = require("../data/productsStore");
const router = express.Router();

// POST new order
router.post("/", (req, res) => {
  const order = req.body;
  const newOrder = addOrder(order);
  res.json({ success: true, order: newOrder });
});

// GET order by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const order = getOrderById(Number(id));
  if (!order) return res.status(404).json({ success: false, message: "Order not found" });
  res.json({ success: true, order });
});

module.exports = router;