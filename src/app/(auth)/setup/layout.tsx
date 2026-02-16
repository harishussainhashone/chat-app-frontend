import type { ReactNode } from "react";

export default function SetupLayout({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-gray-50">{children}</main>;
}
