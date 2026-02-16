"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  HiBars3,
  HiXMark,
  HiBell,
  HiSquares2X2,
  HiUser,
} from "react-icons/hi2";
import ThemechangerButton from "../ui/ThemechangerButton";

type TopbarProps = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

const titleMap: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/chats": "Chats",
  "/chats/queue": "Chat Queue",
  "/users": "Users",
  "/roles": "Roles",
  "/departments": "Departments",
  "/analytics": "Analytics",
  "/subscription": "Subscription",
  "/settings": "Settings",
};

export default function Topbar({ toggleSidebar, isSidebarOpen }: TopbarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const getPageTitle = () => {
    if (!pathname) return "Dashboard";
    if (titleMap[pathname]) return titleMap[pathname];
    if (pathname.startsWith("/users/")) return "User";
    if (pathname.startsWith("/roles/")) return "Role";
    if (pathname.startsWith("/departments/")) return "Department";
    return "Dashboard";
  };

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <nav className="bg-surface border-b border-gray-200 px-6 py-3 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-700 hover:text-gray-900 transition-colors"
          >
            {isSidebarOpen ? (
              <HiXMark className="text-2xl" />
            ) : (
              <HiBars3 className="text-2xl" />
            )}
          </button>
          <h1 className="text-xl font-semibold text-gray-800">
            {getPageTitle()}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-gray-600 hover:text-gray-900 transition-colors">
            <HiBell className="text-2xl" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="text-gray-600 hover:text-gray-900 transition-colors">
            <HiSquares2X2 className="text-2xl" />
          </button>
{/* 
          <button
            onClick={handleLogout}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold hover:shadow-lg transition-all"
          >
            <HiUser className="text-xl" />
          </button> */}
          <ThemechangerButton/>
        </div>
      </div>
    </nav>
  );
}
