// All products + order storage
const products = [
  { id: 1, barcode: "8909106072572", product_name: "CLINIC PLUS", price: 1, weight: 6.5, expiry: "18 months" },
  { id: 2, barcode: "8906057534098", product_name: "MEDIMIX SOAP", price: 45, weight: 100, expiry: "12/25 & 11/27" },
  { id: 3, barcode: "8909106040670", product_name: "SURF EXCEL SOAP", price: 35, weight: 250, expiry: "2026-07-20" },
  { id: 4, barcode: "8909106014879", product_name: "VIM SOAP", price: 10, weight: 110, expiry: "1/26" },
  { id: 5, barcode: "8901361372565", product_name: "Scotch Brite", price: 20, weight: 10, expiry: "2026-12-01" },
  { id: 6, barcode: "8906005017611", product_name: "TT Tasty Tasty Minis", price: 40, weight: 20, expiry: "2026-05-25" },
  { id: 7, barcode: "17004", product_name: "Sombu", price: 20, weight: 50, expiry: "2026-11-30" },
  { id: 8, barcode: "593220", product_name: "Avul", price: 30, weight: 250, expiry: "2026-10-05" },
  { id: 9, barcode: "8906002080625", product_name: "Sakthi Rasam Powder", price: 90, weight: 100, expiry: "2026-04-15" },
  { id: 10, barcode: "8901399333552", product_name: "Softtouch", price: 4, weight: 18, expiry: "2026-03-20" },
  { id: 11, barcode: "8901725014322", product_name: "Mangaldeep", price: 55, weight: 95, expiry: "2026-07-10" },
  { id: 12, barcode: "8906002080328", product_name: "Sakthi Sambar Powder", price: 60, weight: 100, expiry: "2026-05-30" },
  { id: 13, barcode: "8906002084159", product_name: "Sakthi Appalam", price: 45, weight: 150, expiry: "2026-08-25" },
  { id: 14, barcode: "19118", product_name: "Vadai Paruppu", price: 60, weight: 500, expiry: "2026-09-15" },
  { id: 15, barcode: "8906002081523", product_name: "Sakthi Chicken Masala", price: 55, weight: 100, expiry: "11/25 & 8/26" },
  { id: 16, barcode: "8906002080021", product_name: "Sakthi Turmeric Powder", price: 50, weight: 100, expiry: "2026-10-20" },
  { id: 17, barcode: "8906002080229", product_name: "Sakthi Coriander Powder", price: 50, weight: 100, expiry: "2026-11-10" }
];

const orders = []; // temporary storage

function getAllProducts() {
  return products;
}

function getProductByBarcode(barcode) {
  return products.find(p => p.barcode === barcode);
}

function addOrder(order) {
  const id = orders.length + 1;
  const newOrder = { id, ...order };
  orders.push(newOrder);
  return newOrder;
}

function getOrderById(id) {
  return orders.find(o => o.id === id);
}

module.exports = { getAllProducts, getProductByBarcode, addOrder, getOrderById };