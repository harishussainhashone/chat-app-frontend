'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HiHome, HiUsers, HiClock, HiChartBar, HiComputerDesktop, HiCog, HiChevronDown, HiChevronLeft, HiChevronRight, HiXMark } from 'react-icons/hi2';

export default function Sidebar({ isOpen, closeSidebar, isCollapsed, toggleCollapse }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar when route changes on mobile
  useEffect(() => {
    closeSidebar();
  }, [pathname, closeSidebar]);

  const mainMenuItems = [
    { icon: HiHome, label: 'Home', path: '/dashboard', badge: null },
    { icon: HiUsers, label: 'Visitors', path: '/visitors', badge: null },
    { icon: HiClock, label: 'History', path: '/history', badge: '1' },
    { icon: HiChartBar, label: 'Analytics', path: '/analytics', badge: null },
    { icon: HiComputerDesktop, label: 'Monitor', path: '/monitor', badge: null },
  ];

  const settingsSubItems = [
    { label: 'Agents', path: '/settings/agents' },
    { label: 'Departments', path: '/settings/departments' },
    { label: 'Roles', path: '/settings/roles' },
    { label: 'Routing', path: '/settings/routing' },
    { label: 'Shortcuts', path: '/settings/shortcuts' },
    { label: 'Banned', path: '/settings/banned' },
    { label: 'Triggers', path: '/settings/triggers' },
    { label: 'Goals', path: '/settings/goals' },
    { label: 'Widget', path: '/settings/widget' },
    { label: 'Personal', path: '/settings/personal' },
    { label: 'Account', path: '/settings/account' },
  ];

  const isActive = (path) => pathname === path;
  const isSettingsActive = pathname?.startsWith('/settings');

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0  bg-black/20 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`bg-[#1a4d4d] h-screen flex flex-col text-white fixed left-0 top-0 z-50 transition-all duration-300 
        ${isCollapsed ? 'w-16' : 'w-56'}
        lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Toggle Button for Desktop */}
        <button
          onClick={toggleCollapse}
          className="hidden lg:flex absolute -right-3 top-20 w-6 h-6 bg-white rounded-full items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          {isCollapsed ? (
            <HiChevronRight className="text-gray-700 text-sm" />
          ) : (
            <HiChevronLeft className="text-gray-700 text-sm" />
          )}
        </button>

        {/* Logo */}
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
          {/* Close button for mobile */}
          <button
            onClick={closeSidebar}
            className="lg:hidden text-white hover:text-gray-300 transition-colors absolute right-4"
          >
            <HiXMark className="text-2xl" />
          </button>
        </div>

      {/* Online Status */}
      {!isCollapsed && (
        <div className="px-4 py-3 shrink-0">
          <button className="w-full flex items-center justify-between bg-[#0f3838] hover:bg-[#1a4040] rounded-full px-4 py-2.5 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">Online</span>
            </div>
            <HiChevronDown className="text-sm text-gray-400" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-2">
          {/* Main Menu Items */}
          {mainMenuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index} className="relative group">
                <Link
                  href={item.path}
                  className={`flex items-center ${isCollapsed ? 'justify-center px-2' : 'justify-between px-4'} py-3 transition-colors ${
                    isActive(item.path)
                      ? 'bg-[#2a5d5d] border-l-4 border-teal-400'
                      : 'hover:bg-[#234a4a]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="text-lg opacity-80 shrink-0" />
                    {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                  </div>
                  {!isCollapsed && item.badge && (
                    <span className="bg-gray-500 text-white text-xs rounded-full px-2 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </Link>
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="hidden lg:group-hover:block absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </li>
            );
          })}

          {/* Settings with Submenu */}
          <li className="relative group">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'justify-between px-4'} py-3 transition-colors ${
                isSettingsActive
                  ? 'bg-[#2a5d5d] border-l-4 border-teal-400'
                  : 'hover:bg-[#234a4a]'
              }`}
            >
              <div className="flex items-center gap-3">
                <HiCog className="text-lg opacity-80 shrink-0" />
                {!isCollapsed && <span className="text-sm font-medium">Settings</span>}
              </div>
              {!isCollapsed && (
                <HiChevronDown className={`text-xs transition-transform duration-200 ${isSettingsOpen ? 'rotate-180' : ''}`} />
              )}
            </button>
            
            {/* Tooltip for collapsed state */}
            {isCollapsed && (
              <div className="hidden lg:group-hover:block absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-50">
                Settings
              </div>
            )}
            
            {/* Settings Submenu */}
            {!isCollapsed && (
              <div className={`transition-all duration-200 overflow-hidden ${isSettingsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="bg-[#0f3838] py-2">
                  {settingsSubItems.map((subItem, idx) => (
                    <li key={idx}>
                      <Link
                        href={subItem.path}
                        className={`block px-8 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#1a4040] transition-colors ${
                          isActive(subItem.path) ? 'text-white font-medium bg-[#1a4040]' : ''
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

      {/* Footer */}
      {!isCollapsed && (
        <div className="px-4 py-3 border-t border-[#2a5d5d] text-center shrink-0">
          <p className="text-xs text-gray-400">0 requests</p>
        </div>
      )}
    </aside>
    </>
  );
}

