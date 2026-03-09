const express = require("express");
const { getAllProducts, getProductByBarcode } = require("../data/productsStore");
const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  try {
    const products = getAllProducts();
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch products" });
  }
});

// GET product by barcode
router.get("/barcode/:barcode", (req, res) => {
  const { barcode } = req.params;
  const product = getProductByBarcode(barcode);
  if (!product) return res.status(404).json({ success: false, message: "Product not found" });
  res.json({ success: true, product });
});

module.exports = router;