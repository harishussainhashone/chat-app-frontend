import { apiClient } from "@/services/api-client";

export async function fetchAnalytics() {
  const response = await apiClient.get("/analytics");
  return response.data;
}
