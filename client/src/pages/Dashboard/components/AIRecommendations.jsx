import { aiRecommendations } from "../../../data/dashboardData";

function AIRecommendations() {
  const getBadgeStyle = (type) => {
    return type === "rose"
      ? {
          card: "border-rose-100 bg-rose-50/50 text-rose-700",
          badge: "bg-rose-100 text-rose-700",
        }
      : {
          card: "border-blue-100 bg-blue-50/50 text-blue-700",
          badge: "bg-blue-100 text-blue-700",
        };
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-800 leading-tight">AI Mentor Guidance</h3>
            <p className="text-[10px] text-slate-400">Personalized study pointers</p>
          </div>
        </div>

        {/* Suggestion list */}
        <div className="space-y-4">
          {aiRecommendations.map((rec, idx) => {
            const styles = getBadgeStyle(rec.badgeType);
            return (
              <div
                key={idx}
                className={`p-4 border rounded-xl flex flex-col gap-2 transition duration-200 hover:-translate-y-0.5 ${styles.card}`}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800">{rec.title}</h4>
                  <span className={`text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${styles.badge}`}>
                    {rec.priority}
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {rec.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4.5 border-t border-slate-100/60 flex items-center justify-between">
        <span className="text-[10px] text-slate-400">Match rate: 82% placement ready</span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition cursor-pointer active:scale-95">
          Practice Recommended
        </button>
      </div>

    </div>
  );
}

export default AIRecommendations;
