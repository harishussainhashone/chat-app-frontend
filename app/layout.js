'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login' || pathname === '/';
  const isVisitorDetailPage = pathname.startsWith('/visitors/') && pathname.split('/').length === 3;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isLoginPage ? (
          children
        ) : isVisitorDetailPage ? (
          <div className="flex min-h-screen">
            <Sidebar 
              isOpen={isSidebarOpen} 
              closeSidebar={closeSidebar}
              isCollapsed={isCollapsed}
              toggleCollapse={toggleCollapse}
            />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-56'}`}>
              <main className="flex-1 bg-white">
                {children}
              </main>
            </div>
          </div>
        ) : (
          <div className="flex min-h-screen">
            <Sidebar 
              isOpen={isSidebarOpen} 
              closeSidebar={closeSidebar}
              isCollapsed={isCollapsed}
              toggleCollapse={toggleCollapse}
            />
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? 'lg:ml-16' : 'lg:ml-56'}`}>
              <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
              <main className="flex-1 bg-white">
                {children}
              </main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
