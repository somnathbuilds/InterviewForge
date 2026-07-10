import { useProgress } from "../../../context/ProgressContext";
import { useAuth } from "../../../context/AuthContext";

function ProgressOverview() {
  const { user } = useAuth();
  const { dashboardStats } = useProgress();

  const getIcon = (type) => {
    switch (type) {
      case "dsa":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "aptitude":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "core":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case "mocks":
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const cards = [
    {
      title: "DSA Practice",
      value: `${dashboardStats.totalSolved} Problems`,
      description: "Algorithm syllabus completed",
      type: "dsa",
      progress: dashboardStats.progressPercentage
    },
    {
      title: "Favorite Problems",
      value: `${dashboardStats.totalFavorites} Starred`,
      description: "Bookmarked interview questions",
      type: "mocks",
      progress: null
    },
    {
      title: "Preparation Streak",
      value: `🔥 ${dashboardStats.currentStreak} Day Streak`,
      description: "Consistent learning daily",
      type: "aptitude",
      progress: null
    },
    {
      title: "Interview Readiness",
      value: `${dashboardStats.progressPercentage}% Match`,
      description: `${user?.targetCompany || "General"} preparation track`,
      type: "core",
      progress: dashboardStats.progressPercentage
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="group bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                {card.title}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mt-2.5 leading-none">
                {card.value}
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1.5 font-medium">
                {card.description}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              {getIcon(card.type)}
            </div>
          </div>

          {card.progress !== null ? (
            <div className="mt-4 pt-1.5">
              <div className="flex justify-between items-center text-[10px] font-semibold text-slate-500 mb-1">
                <span>Progress</span>
                <span className="font-bold text-slate-700">{card.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${card.progress}%` }}></div>
              </div>
            </div>
          ) : (
            <div className="mt-4 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
              <span>Ready for next session</span>
              <span className="flex items-center gap-1 font-semibold text-blue-600">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping"></span>
                Active
              </span>
            </div>
          )}

        </div>
      ))}
    </div>
  );
}

export default ProgressOverview;
