"use client";

import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store";

export default function AuthDebugBanner() {
  const pathname = usePathname();
  const { token, loading } = useAuthStore();

  return (
    <div className="fixed bottom-3 right-3 z-[9999] rounded-md border border-black/10 bg-white/90 px-3 py-2 text-xs text-gray-800 shadow">
      <div>path: {pathname || "unknown"}</div>
      <div>loading: {String(loading)}</div>
      <div>token: {token ? "present" : "null"}</div>
    </div>
  );
}
