"use client";

import type { ReactNode } from "react";
import { useCallback, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

type PageShellProps = {
  children: ReactNode;
  showTopbar?: boolean;
};

export default function PageShell({ children, showTopbar = true }: PageShellProps) {
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

  const shouldShowTopbar = useMemo(() => {
    if (!showTopbar) return false;
    const segments = pathname?.split("/").filter(Boolean) ?? [];
    const isChatDetail =
      segments[0] === "chats" && segments.length === 2 && segments[1] !== "queue";
    return !isChatDetail;
  }, [pathname, showTopbar]);

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
        {shouldShowTopbar && (
          <Topbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        )}
        <main className="flex-1 bg-surface">{children}</main>
      </div>
    </div>
  );
}
