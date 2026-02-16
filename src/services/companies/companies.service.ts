import apiClient from "../api-client";
import { Company } from "./companies.types";

export const companiesService = {
  getMe: async (): Promise<Company> => {
    const res = await apiClient.get("/api/companies/me");
    return res.data;
  },
};
