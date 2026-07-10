import { useProgress } from "../../../context/ProgressContext";

function RecentActivity() {
  const { dashboardStats } = useProgress();
  const activities = dashboardStats.recentlySolved || [];

  const getBadgeColor = (color) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-500";
      case "amber":
        return "bg-amber-500";
      case "rose":
        return "bg-rose-500";
      case "blue":
        return "bg-blue-600";
      default:
        return "bg-slate-600";
    }
  };

  const formattedActivities = activities.length > 0
    ? activities.map((q) => ({
        time: new Date(q.solvedAt).toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
        title: q.name,
        desc: `Solved on ${q.company || "General"} track • Topic: ${q.topic} • Difficulty: ${q.difficulty}`,
        badgeColor: q.difficulty === "Easy" ? "emerald" : q.difficulty === "Medium" ? "amber" : "rose"
      }))
    : [
        {
          time: "Just Now",
          title: "Get Started!",
          desc: "Solve coding questions on the DSA dashboard or Company preparation tracker to log progress.",
          badgeColor: "blue"
        }
      ];

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
      
      {/* Title Header */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-base font-bold text-slate-800">Recent Preparation Activities</h3>
          <button className="text-xs text-slate-400 hover:text-blue-600 transition cursor-pointer">
            Clear Logs
          </button>
        </div>

        {/* Timeline body */}
        <div className="relative border-l-2 border-slate-100 pl-6 ml-2.5 space-y-6">
          {formattedActivities.map((act, idx) => (
            <div key={idx} className="relative">
              {/* Timing Bullet node */}
              <span className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-white ${getBadgeColor(act.badgeColor)}`}></span>
              
              {/* Message Details */}
              <div>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  {act.time}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 mt-1 leading-tight">
                  {act.title}
                </h4>
                <p className="text-slate-550 text-xs mt-1 leading-relaxed">
                  {act.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Footer Banner */}
      <div className="mt-6 pt-4.5 border-t border-slate-100/60 flex items-center justify-between text-xs text-slate-400">
        <span>Log activity is saved for 30 days</span>
        <button className="text-blue-600 font-semibold hover:text-blue-700 transition cursor-pointer">
          Export Prep PDF
        </button>
      </div>

    </div>
  );
}

export default RecentActivity;
