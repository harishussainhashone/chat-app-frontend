import { apiClient } from "@/services/api-client";

export async function fetchPermissions() {
  const response = await apiClient.get("/permissions");
  return response.data;
}
