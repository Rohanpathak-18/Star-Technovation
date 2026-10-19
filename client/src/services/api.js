async function request(path, options = {}) {
  const response = await fetch(`/api/${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
  });
  const payload = await response.json();
  if (!response.ok)
    throw new Error(payload.message || "Request failed. Please try again.");
  return payload;
}

export const api = {
  submitContact: (data) =>
    request("contact", { method: "POST", body: JSON.stringify(data) }),
  subscribe: (data) =>
    request("newsletter", { method: "POST", body: JSON.stringify(data) }),
  register: (data) =>
    request("auth/register", { method: "POST", body: JSON.stringify(data) }),
  login: (data) =>
    request("auth/login", { method: "POST", body: JSON.stringify(data) }),
  adminOverview: () =>
    request("admin/overview", {
      headers: { Authorization: `Bearer ${localStorage.getItem("st-token")}` },
    }),
  createCheckout: (data) =>
    request("payments/checkout", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
