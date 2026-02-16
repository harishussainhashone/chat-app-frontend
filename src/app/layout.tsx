//src/app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import AuthInit from "@/components/auth-init";
import AuthDebugBanner from "@/components/debug/AuthDebugBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Company Dashboard",
    template: "%s | Company Dashboard",
  },
  description: "Multi-tenant SaaS chat application dashboard.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AuthInit />
        {process.env.NODE_ENV === "development" && <AuthDebugBanner />}
        {children}
      </body>
    </html>
  );
}
