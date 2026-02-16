import { apiClient } from "@/services/api-client";

export async function fetchSubscriptions() {
  const response = await apiClient.get("/subscriptions");
  return response.data;
}
