// src/api.js
const API_URL = "https://trolley-q781.onrender.com/api";

export async function login(username, password) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, message: "Login failed" };
  }
}

export async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/products`);
    if (!res.ok) throw new Error("Network response not OK");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return { success: false, products: [] };
  }
}

export async function getProductByBarcode(barcode) {
  try {
    const res = await fetch(`${API_URL}/products/barcode/${barcode}`);
    if (!res.ok) throw new Error("Product not found");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch product by barcode:", err);
    return { success: false, product: null };
  }
}

export async function createOrder(items, total) {
  try {
    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, total })
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to create order:", err);
    return { success: false, order: null };
  }
}

export async function getOrders() {
  try {
    const res = await fetch(`${API_URL}/orders`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch orders:", err);
    return { success: false, orders: [] };
  }
}