'use client';

import { useRouter, usePathname } from 'next/navigation';
import { HiBars3, HiXMark, HiBell, HiSquares2X2, HiUser } from 'react-icons/hi2';

export default function Navbar({ toggleSidebar, isSidebarOpen }) {
  const router = useRouter();
  const pathname = usePathname();

  // Get page title from pathname
  const getPageTitle = () => {
    const path = pathname.split('/').pop();
    if (!path || path === 'dashboard') return 'Home';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
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
          <h1 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h1>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <button className="relative text-gray-600 hover:text-gray-900 transition-colors">
            <HiBell className="text-2xl" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          {/* Apps Grid Icon */}
          <button className="text-gray-600 hover:text-gray-900 transition-colors">
            <HiSquares2X2 className="text-2xl" />
          </button>
          
          {/* Profile Avatar */}
          <button 
            onClick={handleLogout}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold hover:shadow-lg transition-all"
          >
            <HiUser className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}
