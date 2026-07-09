import WelcomeCard from "./components/WelcomeCard";
import ProgressOverview from "./components/ProgressOverview";
import DashboardLayout from "./components/DashboardLayout";
import DailyGoals from "./components/DailyGoals";
import AIRecommendations from "./components/AIRecommendations";
import UpcomingCompanies from "./components/UpcomingCompanies";
import RecentActivity from "./components/RecentActivity";

function Dashboard() {
  return (
    <DashboardLayout>
      <WelcomeCard />
      <ProgressOverview />

      {/* Grid panel 1: Goals and AI Advice */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DailyGoals />
        <AIRecommendations />
      </div>

      {/* Grid panel 2: Recruitment and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingCompanies />
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
