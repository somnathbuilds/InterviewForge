import { dsaSidebarData } from "../../../data/dsaData";

function TodaysFocus() {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-col justify-between">
      <div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Today's Focus</span>
        <div className="mt-3.5 p-3.5 bg-blue-50/50 border border-blue-100 rounded-xl">
          <h4 className="text-xs font-bold text-slate-800 leading-tight">Daily Target Goal</h4>
          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
            {dsaSidebarData.todayGoal}
          </p>
        </div>
      </div>
      <div className="mt-4 text-[11px] text-slate-400 font-semibold flex items-center justify-between">
        <span>Completion time: ~2h 30m</span>
        <span className="text-blue-600">High priority</span>
      </div>
    </div>
  );
}

export default TodaysFocus;
