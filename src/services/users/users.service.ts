import { apiClient } from "@/services/api-client";

export async function fetchUsers() {
  const response = await apiClient.get("/users");
  return response.data;
}
