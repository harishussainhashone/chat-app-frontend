import { apiClient } from "@/services/api-client";

export async function fetchPlans() {
  const response = await apiClient.get("/plans");
  return response.data;
}
