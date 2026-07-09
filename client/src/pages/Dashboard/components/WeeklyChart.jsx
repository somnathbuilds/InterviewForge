import { weeklyProgressData } from "../../../data/dashboardData";

function WeeklyChart() {
  const maxSolved = Math.max(...weeklyProgressData.map((d) => d.solved));
  const totalSolved = weeklyProgressData.reduce((acc, curr) => acc + curr.solved, 0);
  const avgSolved = (totalSolved / weeklyProgressData.length).toFixed(1);

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full min-h-[360px]">
      
      {/* Chart Title Header */}
      <div>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-800">Weekly Problem Activity</h3>
            <p className="text-[10px] text-slate-400">DSA problems solved daily this week</p>
          </div>
          <div className="flex gap-4.5 text-right">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total</span>
              <span className="text-sm font-extrabold text-slate-800">{totalSolved} Solved</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Daily Avg</span>
              <span className="text-sm font-extrabold text-blue-600">{avgSolved} / day</span>
            </div>
          </div>
        </div>

        {/* Chart Canvas Area */}
        <div className="relative h-44 flex items-end gap-3 sm:gap-6 mt-4">
          
          {/* Background Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none -z-10 py-1">
            <span className="w-full border-t border-slate-100/80"></span>
            <span className="w-full border-t border-slate-100/80"></span>
            <span className="w-full border-t border-slate-100/80"></span>
            <span className="w-full border-t border-slate-100/80"></span>
          </div>

          {/* Render Bars */}
          {weeklyProgressData.map((item, idx) => {
            const heightPercent = `${(item.solved / maxSolved) * 100}%`;

            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                {/* Solved count hovering tooltip */}
                <div className="relative w-full flex justify-center group h-full items-end">
                  <div
                    className="w-full max-w-[28px] sm:max-w-[34px] bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-600 cursor-pointer shadow-sm shadow-blue-500/10 hover:shadow-blue-500/20"
                    style={{ height: heightPercent }}
                  ></div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-extrabold px-2 py-0.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    {item.solved} Solved
                  </div>
                </div>

                {/* Day label */}
                <span className="text-[10px] font-bold text-slate-400 select-none">
                  {item.day}
                </span>
              </div>
            );
          })}

        </div>
      </div>

      {/* Footer Info details */}
      <div className="mt-6 pt-4 border-t border-slate-100/60 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5 font-medium text-emerald-600">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Target goal met on Fri & Sun
        </span>
        <button className="text-blue-600 font-bold hover:text-blue-700 transition">
          Full Analytics
        </button>
      </div>

    </div>
  );
}

export default WeeklyChart;
