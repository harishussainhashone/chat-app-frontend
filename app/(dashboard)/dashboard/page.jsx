import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentActivity from "@/components/dashboard/RecentActivity";
import RightSidebar from "@/components/dashboard/RightSidebar";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import WebsiteAnalytics from "@/components/dashboard/WebsiteAnalytics";

export default function DashboardPage() {
  return (
    <div className="flex flex-col md:flex-row flex-1">
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-6xl">
          <WelcomeSection />
          <WebsiteAnalytics />

          {/* <StatsGrid />
          <RecentActivity /> */}
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}
