import apiClient from "@/services/api-client";

export async function fetchChats() {
  const response = await apiClient.get("/chats");
  return response.data;
}
