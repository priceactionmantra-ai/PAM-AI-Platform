const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

async function request(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

export const api = {
  health: () => request("/health"),

  marketStatus: () => request("/market/status"),

  watchlist: () => request("/watchlist"),

  scanner: () => request("/scanner"),

  portfolio: () => request("/portfolio"),

  recentTrades: () => request("/trades"),

  chart: (symbol: string) =>
    request(`/chart/${symbol}`),
};