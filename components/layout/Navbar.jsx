'use client';

import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold text-indigo-600">Chat App</h2>
        <button 
          onClick={handleLogout}
          className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
