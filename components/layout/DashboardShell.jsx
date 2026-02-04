"use client";

import { useCallback, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function DashboardShell({ children, showNavbar = true }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const shouldShowNavbar = useMemo(() => {
    if (!showNavbar) return false;
    const isVisitorDetail =
      pathname?.startsWith("/visitors/") && pathname.split("/").length === 3;
    return !isVisitorDetail;
  }, [pathname, showNavbar]);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        isCollapsed={isCollapsed}
        toggleCollapse={toggleCollapse}
      />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isCollapsed ? "lg:ml-16" : "lg:ml-56"
        }`}
      >
        {shouldShowNavbar && (
          <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        )}
        <main className="flex-1 bg-white">{children}</main>
      </div>
    </div>
  );
}
