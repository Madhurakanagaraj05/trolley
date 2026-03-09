const API_BASE = "https://trolley-q781.onrender.com";

export async function getProducts() {
  const res = await fetch(`${API_BASE}/api/products`);
  return res.json();
}

export async function getProductByBarcode(barcode) {
  const res = await fetch(`${API_BASE}/api/products/${barcode}`);
  return res.json();
}

export async function login(username, password) {
  const res = await fetch(`${API_BASE}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  return res.json();
}

export async function createOrder(orderData) {
  const res = await fetch(`${API_BASE}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(orderData)
  });

  return res.json();
}