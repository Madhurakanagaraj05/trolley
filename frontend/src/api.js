// frontend/src/api.js

const API_URL = "https://trolley-q781.onrender.com/api"; // <-- your backend URL

// 1️⃣ Login
export async function login(username, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
}

// 2️⃣ Get all products
export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
}

// 3️⃣ Get product by barcode
export async function getProductByBarcode(barcode) {
  const data = await getProducts();
  if (!data.success) return null;

  const product = data.products.find((p) => p.barcode === barcode);
  return product || null;
}

// 4️⃣ Create a new order
export async function createOrder(order) {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  return res.json();
}

// 5️⃣ Get all orders
export async function getOrders() {
  const res = await fetch(`${API_URL}/orders`);
  return res.json();
}