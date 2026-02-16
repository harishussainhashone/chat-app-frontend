import { create } from "zustand";
import { authService } from "@/services/auth/auth.service";
import { companiesService } from "@/services/companies/companies.service";
import { User } from "@/types/user";
import { Company } from "@/types/company";

interface AuthState {
  token: string | null;
  user: User | null;
  company: Company | null;
  loading: boolean;

  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  init: () => Promise<void>;
}

const useMockAuth = process.env.NEXT_PUBLIC_MOCK_AUTH !== "false";

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  company: null,
  loading: true, // App starts in a loading state while checking for a session

  /**
   * LOGIN FLOW
   * 1. Set loading state
   * 2. Call API login
   * 3. Persist token
   * 4. Fetch Company Context
   * 5. Set final state or catch error
   */
  login: async (email, password) => {
    set({ loading: true });
    try {
      if (useMockAuth) {
        const mockToken = "mock-token";
        const mockUser = {
          id: "mock-user",
          name: email.split("@")[0] || "User",
          email,
        };
        const mockCompany = {
          id: "mock-company",
          name: "Demo Company",
        };

        localStorage.setItem("auth_token", mockToken);
        localStorage.setItem("auth_email", email);

        set({
          token: mockToken,
          user: mockUser,
          company: mockCompany,
          loading: false,
        });
        return;
      }

      const res = await authService.login({ email, password });

      // Save token to localStorage for persistence
      localStorage.setItem("auth_token", res.token);

      // Immediately fetch the company context after a successful login
      const company = await companiesService.getMe();

      set({
        token: res.token,
        user: res.user,
        company: company,
        loading: false,
      });
    } catch (error) {
      set({ loading: false });
      // Rethrowing allows the Login component to show an error message to the user
      throw error; 
    }
  },

  /**
   * LOGOUT FLOW
   * 1. Call API logout (optional but good practice)
   * 2. Wipe everything clean
   */
  logout: async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error("Logout API failed, but clearing local session anyway.", error);
    } finally {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_email");
      set({
        token: null,
        user: null,
        company: null,
        loading: false,
      });
    }
  },

  /**
   * INITIALIZATION (The "Refresh" Handler)
   * Runs when the app boots up to restore the session from localStorage.
   */
  init: async () => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      set({ loading: false });
      return;
    }

    try {
      if (useMockAuth || token === "mock-token") {
        const email = localStorage.getItem("auth_email") ?? "user@demo.com";
        const mockUser = {
          id: "mock-user",
          name: email.split("@")[0] || "User",
          email,
        };
        const mockCompany = {
          id: "mock-company",
          name: "Demo Company",
        };
        set({
          token,
          user: mockUser,
          company: mockCompany,
          loading: false,
        });
        return;
      }

      // If we have a token, verify it by fetching the current company
      const company = await companiesService.getMe();
      set({
        token,
        company,
        loading: false,
      });
    } catch (error) {
      // If the token is expired or invalid, the API will fail. 
      // We clear the stale token and stop loading.
      localStorage.removeItem("auth_token");
      set({
        token: null,
        user: null,
        company: null,
        loading: false,
      });
    }
  },
}));
