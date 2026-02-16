import apiClient from "../api-client";
import { LoginDto, AuthResponseDto } from "./auth.types";

export const authService = {
  login: async (data: LoginDto): Promise<AuthResponseDto> => {
    const res = await apiClient.post("/api/companies/auth/login", data);
    return res.data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post("/api/auth/logout");
  },
};
