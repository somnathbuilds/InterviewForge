import { useState } from "react";

// Reusable Stat Card Component
function StatCard({ title, value, subtitle, progress, icon, color = "blue" }) {
  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      bar: "bg-blue-600",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      bar: "bg-indigo-600",
    },
    violet: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      bar: "bg-violet-600",
    },
    sky: {
      bg: "bg-sky-50",
      text: "text-sky-600",
      bar: "bg-sky-600",
    },
  };

  const colors = colorMap[color] || colorMap.blue;

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-extrabold text-slate-800 mt-1">{value}</p>
        </div>
        <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center shrink-0`}>
          {icon}
        </div>
      </div>
      
      {progress !== undefined && (
        <div className="mt-2">
          <div className="flex justify-between items-center text-[10px] font-semibold text-slate-500 mb-1">
            <span>Target Completion</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className={`h-full ${colors.bar} rounded-full transition-all duration-500`} style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
      
      {subtitle && (
        <p className="text-xs text-slate-500 mt-2 font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" /></svg> },
    { name: "DSA Prep", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
    { name: "Aptitude", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
    { name: "Mock Arena", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> },
    { name: "Core CS", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg> },
    { name: "Analytics", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
  ];

  const roadmapMilestones = [
    { title: "Standard Resume Review", desc: "AI-based template check & formatting check", status: "completed" },
    { title: "DSA Fundamentals", desc: "Arrays, Linked Lists, Binary Trees", status: "completed" },
    { title: "Advanced Problem Solving", desc: "Dynamic Programming, Graphs, Backtracking", status: "active" },
    { title: "System Design Round prep", desc: "Scaling, Caching, Load Balancers", status: "pending" },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-xs">
            Interactive Dashboard
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
            See the Platform in Action
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Gain full control of your engineering placement roadmap with a powerful Candidate workspace designed to guide, track, and score your performance.
          </p>
        </div>

        {/* Dashboard Mockup Browser Frame */}
        <div className="relative bg-slate-900/5 rounded-3xl p-4 ring-1 ring-slate-900/10 backdrop-blur shadow-2xl max-w-6xl mx-auto">
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-inner flex flex-col min-h-[580px] lg:min-h-[640px]">
            
            {/* Top Browser Bar */}
            <div className="h-12 border-b border-slate-200 bg-white px-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-400"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="w-96 h-6.5 rounded-md bg-slate-100 border border-slate-200/60 text-[11px] text-slate-400 flex items-center justify-center font-mono gap-1">
                <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                interviewforge.com/dashboard/somnath
              </div>
              <div className="w-12"></div>
            </div>

            {/* Main Application Area */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              
              {/* Sidebar */}
              <aside className="w-full md:w-60 bg-white border-r border-slate-200 flex flex-col shrink-0">
                {/* User Info */}
                <div className="p-5 border-b border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    SP
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-tight">Somnath Paul</h4>
                    <span className="text-[10px] text-slate-400 font-medium">Placement Batch 2026</span>
                  </div>
                </div>

                {/* Sidebar Navigation */}
                <nav className="p-4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-1 md:gap-1.5 scrollbar-none">
                  {menuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setActiveTab(item.name)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                        activeTab === item.name
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Central Content Panel */}
              <main className="flex-1 p-6 lg:p-8 flex flex-col gap-6 overflow-y-auto">
                
                {/* Banner / Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-extrabold text-slate-800">Workspace Dashboard</h3>
                    <p className="text-slate-500 text-xs mt-1">AI placement analytics for tech interviews</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs px-4 py-2 rounded-xl font-semibold shadow-sm transition active:scale-95 cursor-pointer">
                      View Roadmap
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-xl font-semibold shadow-md shadow-blue-600/10 transition active:scale-95 cursor-pointer">
                      Start Prep Round
                    </button>
                  </div>
                </div>

                {/* Reusable Stat Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <StatCard
                    title="DSA Solved"
                    value="142 / 200"
                    subtitle="12 problems in last 7 days"
                    progress={71}
                    color="blue"
                    icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                  />
                  <StatCard
                    title="Aptitude Rank"
                    value="86 / 100"
                    subtitle="Percentile score: 94.2%"
                    progress={86}
                    color="indigo"
                    icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                  />
                  <StatCard
                    title="Mock Interviews"
                    value="4 Scheduled"
                    subtitle="Next session: Wed at 4:00 PM"
                    progress={50}
                    color="sky"
                    icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                  />
                  <StatCard
                    title="Core CS Mastery"
                    value="18 / 25 Modules"
                    subtitle="Perfect score in DBMS Quiz"
                    progress={72}
                    color="violet"
                    icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
                  />
                </div>

                {/* Sub-panels layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
                  
                  {/* Milestones Card Panel */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm lg:col-span-3 flex flex-col">
                    <h4 className="text-sm font-bold text-slate-800 mb-4">Milestone Tracker</h4>
                    <div className="space-y-4 flex-1 flex flex-col justify-between">
                      {roadmapMilestones.map((milestone, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                          <span className={`w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold ${
                            milestone.status === "completed" 
                              ? "bg-emerald-50 text-emerald-600 border border-emerald-200" 
                              : milestone.status === "active"
                              ? "bg-blue-50 text-blue-600 border border-blue-200 animate-pulse"
                              : "bg-slate-50 text-slate-400 border border-slate-200"
                          }`}>
                            {milestone.status === "completed" ? "✓" : idx + 1}
                          </span>
                          <div>
                            <h5 className="text-xs font-bold text-slate-700 leading-none">{milestone.title}</h5>
                            <p className="text-[10px] text-slate-500 mt-1 leading-normal">{milestone.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Strengths Analysis */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm lg:col-span-2 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-1">AI Strengths Index</h4>
                      <p className="text-[10px] text-slate-400">Based on past quiz & interview scores</p>
                    </div>
                    
                    {/* Strengths indicators */}
                    <div className="space-y-3.5 my-4">
                      <div>
                        <div className="flex justify-between text-[10px] font-semibold text-slate-600 mb-1">
                          <span>Problem Solving</span>
                          <span>85%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-semibold text-slate-600 mb-1">
                          <span>CS Core Topics</span>
                          <span>70%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-semibold text-slate-600 mb-1">
                          <span>Communication</span>
                          <span>92%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-sky-500 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[10px] text-slate-600 leading-normal">
                      💡 <strong>AI Tip:</strong> Practice Graph problems on DSA prep to boost your score to the next grade.
                    </div>
                  </div>

                </div>

              </main>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;
