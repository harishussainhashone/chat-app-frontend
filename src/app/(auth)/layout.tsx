import type { ReactNode } from "react";
import AuthThemeLock from "@/components/auth/AuthThemeLock";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <AuthThemeLock />
      {children}
    </main>
  );
}
