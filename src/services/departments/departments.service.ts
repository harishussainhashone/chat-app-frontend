import { apiClient } from "@/services/api-client";

export async function fetchDepartments() {
  const response = await apiClient.get("/departments");
  return response.data;
}
