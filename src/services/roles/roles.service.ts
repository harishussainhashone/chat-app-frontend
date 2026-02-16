import { apiClient } from "@/services/api-client";

export async function fetchRoles() {
  const response = await apiClient.get("/roles");
  return response.data;
}
