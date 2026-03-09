/**
 * Product routes for Smart Barcode Billing System
 */

const express = require("express");
const {
  getProductByBarcode,
  getAllProducts
} = require("../data/productsStore");

const router = express.Router();


/**
 * GET /api/products
 * Get all products
 */
router.get("/", (req, res) => {
  try {
    const products = getAllProducts();
    res.json({
      success: true,
      products: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products"
    });
  }
});


/**
 * GET /api/products/barcode/:barcode
 * Get product using barcode
 */
router.get("/barcode/:barcode", (req, res) => {
  const { barcode } = req.params;

  if (!barcode || !barcode.trim()) {
    return res.status(400).json({
      success: false,
      message: "Barcode required"
    });
  }

  const product = getProductByBarcode(barcode);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  res.json({
    success: true,
    product: product
  });
});


module.exports = router;