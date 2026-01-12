import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import StatsGrid from '@/components/dashboard/StatsGrid';
import RecentActivity from '@/components/dashboard/RecentActivity';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex flex-1 max-w-7xl w-full mx-auto">
        {/* <Sidebar /> */}

        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to Dashboard</h1>
            <p className="text-gray-600 text-lg mb-8">You have successfully logged in to your chat app.</p>
            
            {/* <StatsGrid /> */}
            {/* <RecentActivity /> */}
          </div>
        </main>
      </div>
    </div>
  );
}
