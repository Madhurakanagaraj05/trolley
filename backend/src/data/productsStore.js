/**
 * Load products from data/products.json.
 * File format: { "products": [ { id, barcode, product_name, price, weight } ] }
 */
const path = require('path');
const fs = require('fs');

const productsPath = path.join(__dirname, '..', '..', 'data', 'products.json');

function loadProducts() {
  const raw = fs.readFileSync(productsPath, 'utf8');
  const data = JSON.parse(raw);
  return data.products || [];
}

/**
 * Find product by barcode. Returns API shape: id, barcode, name, price, weightGrams, imageUrl
 */
function getProductByBarcode(barcode) {
  const products = loadProducts();
  const raw = (barcode || '').trim();

  // Try exact match first
  let row = products.find((p) => String(p.barcode) === raw);

  // If not found, try with only digits (some scanners include spaces or other chars)
  if (!row) {
    const digits = raw.replace(/\D/g, '');
    if (digits) {
      row = products.find((p) => String(p.barcode) === digits);
    }
  }

  // Also try ignoring leading zeros (common mismatch)
  if (!row) {
    const stripZeros = (s) => s.replace(/^0+/, '') || '0';
    const cleaned = stripZeros(raw);
    row = products.find((p) => stripZeros(String(p.barcode)) === cleaned);
  }

  if (!row) return null;
  return {
    id: row.id,
    barcode: row.barcode,
    name: row.product_name,
    price: Number(row.price),
    weightGrams: Number(row.weight) || 0,
    imageUrl: row.image_url || '',
  };
}

module.exports = { loadProducts, getProductByBarcode };
