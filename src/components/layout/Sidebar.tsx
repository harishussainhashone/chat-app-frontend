"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiUsers,
  HiChartBar,
  HiComputerDesktop,
  HiCog,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiXMark,
} from "react-icons/hi2";

type SidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
};

export default function Sidebar({
  isOpen,
  closeSidebar,
  isCollapsed,
  toggleCollapse,
}: SidebarProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    closeSidebar();
  }, [pathname, closeSidebar]);

  const mainMenuItems = [
    { icon: HiHome, label: "Dashboard", path: "/dashboard", badge: null },
    { icon: HiUsers, label: "Chats", path: "/chats", badge: null },
    { icon: HiChartBar, label: "Analytics", path: "/analytics", badge: null },
    {
      icon: HiComputerDesktop,
      label: "Subscription",
      path: "/subscription",
      badge: null,
    },
  ];

  const settingsSubItems = [
    { label: "Users", path: "/users" },
    { label: "Roles", path: "/roles" },
    { label: "Departments", path: "/departments" },
    { label: "Settings", path: "/settings" },
  ];

  const isActive = (path: string) => pathname === path;
  const isSettingsActive =
    pathname?.startsWith("/settings") ||
    pathname?.startsWith("/users") ||
    pathname?.startsWith("/roles") ||
    pathname?.startsWith("/departments");

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`bg-sidebar h-screen flex flex-col text-sidebar-foreground fixed left-0 top-0 z-50 transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-56"
        } lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={toggleCollapse}
          className="hidden lg:flex absolute -right-3 top-20 w-6 h-6 bg-surface rounded-full items-center justify-center shadow-lg hover:bg-surface-2 transition-colors z-10"
        >
          {isCollapsed ? (
            <HiChevronRight className="text-gray-700 text-sm" />
          ) : (
            <HiChevronLeft className="text-gray-700 text-sm" />
          )}
        </button>

        <div className="p-4 flex items-center justify-center flex-shrink-0 relative">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <button
            onClick={closeSidebar}
            className="lg:hidden text-sidebar-foreground hover:text-sidebar-foreground-muted transition-colors absolute right-4"
          >
            <HiXMark className="text-2xl" />
          </button>
        </div>

        {!isCollapsed && (
          <div className="px-4 py-3 shrink-0">
            <button className="w-full flex items-center justify-between bg-sidebar-muted hover:bg-sidebar-hover rounded-full px-4 py-2.5 transition-colors">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">Online</span>
              </div>
              <HiChevronDown className="text-sm text-sidebar-foreground-muted" />
            </button>
          </div>
        )}

        <nav className="flex-1 overflow-y-auto">
          <ul className="py-2">
            {mainMenuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.path} className="relative group">
                  <Link
                    href={item.path}
                    className={`flex items-center ${
                      isCollapsed ? "justify-center px-2" : "justify-between px-4"
                    } py-3 transition-colors ${
                      isActive(item.path)
                        ? "bg-sidebar-active border-l-4 border-teal-400"
                        : "hover:bg-sidebar-hover"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="text-lg opacity-80 shrink-0" />
                      {!isCollapsed && (
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      )}
                    </div>
                    {!isCollapsed && item.badge && (
                      <span className="bg-sidebar-badge text-sidebar-foreground text-xs rounded-full px-2 py-0.5">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                  {isCollapsed && (
                    <div className="hidden lg:group-hover:block absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-sidebar-tooltip text-sidebar-foreground text-xs rounded whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </li>
              );
            })}

            <li className="relative group">
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className={`w-full flex items-center ${
                  isCollapsed ? "justify-center px-2" : "justify-between px-4"
                } py-3 transition-colors ${
                  isSettingsActive
                    ? "bg-sidebar-active border-l-4 border-teal-400"
                    : "hover:bg-sidebar-hover"
                }`}
              >
                <div className="flex items-center gap-3">
                  <HiCog className="text-lg opacity-80 shrink-0" />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">Organization</span>
                  )}
                </div>
                {!isCollapsed && (
                  <HiChevronDown
                    className={`text-xs transition-transform duration-200 ${
                      isSettingsOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {isCollapsed && (
                <div className="hidden lg:group-hover:block absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-sidebar-tooltip text-sidebar-foreground text-xs rounded whitespace-nowrap z-50">
                  Organization
                </div>
              )}

              {!isCollapsed && (
                <div
                  className={`transition-all duration-200 overflow-hidden ${
                    isSettingsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="bg-sidebar-muted py-2">
                    {settingsSubItems.map((subItem) => (
                      <li key={subItem.path}>
                        <Link
                          href={subItem.path}
                          className={`block px-8 py-2.5 text-sm text-sidebar-foreground-muted hover:text-sidebar-foreground hover:bg-sidebar-hover transition-colors ${
                            isActive(subItem.path)
                              ? "text-sidebar-foreground font-medium bg-sidebar-hover"
                              : ""
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {!isCollapsed && (
          <div className="px-4 py-3 border-t border-sidebar-border text-center shrink-0">
            <p className="text-xs text-sidebar-foreground-muted">0 requests</p>
          </div>
        )}
      </aside>
    </>
  );
}
