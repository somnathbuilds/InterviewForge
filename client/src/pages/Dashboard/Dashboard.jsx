import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import WelcomeCard from "./components/WelcomeCard";
import ProgressOverview from "./components/ProgressOverview";

function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden">
      
      {/* Collapsible left navigation panel */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* Top Navbar */}
        <Topbar />

        {/* Workspace content scroll area */}
        <main className="flex-1 p-6 lg:p-8 space-y-6 overflow-y-auto">
          <WelcomeCard />
          <ProgressOverview />
        </main>

      </div>

    </div>
  );
}

export default Dashboard;
