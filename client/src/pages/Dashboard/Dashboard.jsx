import WelcomeCard from "./components/WelcomeCard";
import ProgressOverview from "./components/ProgressOverview";
import DashboardLayout from "./components/DashboardLayout";
import DailyGoals from "./components/DailyGoals";
import AIRecommendations from "./components/AIRecommendations";
import UpcomingCompanies from "./components/UpcomingCompanies";
import RecentActivity from "./components/RecentActivity";
import WeeklyChart from "./components/WeeklyChart";
import TodaysFocus from "./components/TodaysFocus";
import TopicMastery from "./components/TopicMastery";

function Dashboard() {
  return (
    <DashboardLayout>
      <WelcomeCard />
      <ProgressOverview />

      {/* Grid Row 1: Weekly Progress Chart & Daily Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WeeklyChart />
        </div>
        <div>
          <DailyGoals />
        </div>
      </div>

      {/* Grid Row 2: Today's Focus & Topic Mastery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TodaysFocus />
        <TopicMastery />
      </div>

      {/* Grid Row 3: AI Advice, Companies, & Timeline Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AIRecommendations />
        <UpcomingCompanies />
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
