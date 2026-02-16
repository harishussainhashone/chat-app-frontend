import { apiClient } from "@/services/api-client";

export async function fetchMessages(chatId: string) {
  const response = await apiClient.get(`/chats/${chatId}/messages`);
  return response.data;
}
