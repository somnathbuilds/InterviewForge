function RecentActivity() {
  const activities = [
    {
      title: "Completed DFS graph traversal list",
      desc: "Solved 3 medium DFS graph tasks inside the DSA Arena.",
      time: "2 hours ago",
      color: "bg-blue-600",
    },
    {
      title: "Unlocked DBMS Normalization badge",
      desc: "Scored 100% on the core computer database normal forms assessment quiz.",
      time: "Yesterday",
      color: "bg-indigo-600",
    },
    {
      title: "Attended AI Simulated Technical mock round",
      desc: "Evaluation completed: Match-rate rating calculated at 82%. Scorecard generated.",
      time: "2 days ago",
      color: "bg-violet-600",
    },
  ];

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
      
      {/* Title Header */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-base font-bold text-slate-800">Recent Preparation Activities</h3>
          <button className="text-xs text-slate-400 hover:text-blue-600 transition">
            Clear Logs
          </button>
        </div>

        {/* Timeline body */}
        <div className="relative border-l-2 border-slate-100 pl-6 ml-2.5 space-y-6">
          {activities.map((act, idx) => (
            <div key={idx} className="relative">
              {/* Timing Bullet node */}
              <span className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-white ${act.color}`}></span>
              
              {/* Message Details */}
              <div>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  {act.time}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 mt-1 leading-tight">
                  {act.title}
                </h4>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
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
        <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
          Export Prep PDF
        </button>
      </div>

    </div>
  );
}

export default RecentActivity;
