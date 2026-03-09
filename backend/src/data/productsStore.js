const fs = require("fs");
const path = require("path");

const productsFile = path.join(__dirname, "../../data/products.json");

function getAllProducts() {
  const data = fs.readFileSync(productsFile);
  const json = JSON.parse(data);
  return json.products;
}

function getProductByBarcode(barcode) {
  const products = getAllProducts();
  return products.find((p) => p.barcode === barcode);
}

module.exports = {
  getAllProducts,
  getProductByBarcode
};