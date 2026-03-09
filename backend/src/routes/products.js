// backend/src/routes/product.js
const express = require("express");
const { getAllProducts, getProductByBarcode } = require("../../data/productsStore");

const router = express.Router();

// GET /api/products
router.get("/", (req, res) => {
  try {
    const products = getAllProducts();
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch products" });
  }
});

// GET /api/products/barcode/:barcode
router.get("/barcode/:barcode", (req, res) => {
  const product = getProductByBarcode(req.params.barcode);
  if (!product) return res.status(404).json({ success: false, message: "Product not found" });
  res.json({ success: true, product });
});

module.exports = router;