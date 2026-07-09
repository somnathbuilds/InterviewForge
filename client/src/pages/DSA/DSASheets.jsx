function DSASheets() {
  const sheets = [
    { title: "LeetCode 75", desc: "Most popular 75 questions to master basic patterns.", total: 75, solved: 30, progress: 40 },
    { title: "Blind 75", desc: "The original compiled list of essential algorithmic tasks.", total: 75, solved: 25, progress: 33 },
    { title: "Striver SDE Sheet", desc: "Highly comprehensive syllabus tracking system for placements.", total: 180, solved: 40, progress: 22 },
    { title: "Love Babbar 450", desc: "Curated sheets covering extensive topic-wise segments.", total: 450, solved: 145, progress: 32 }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
          Curated Sheets
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-3">
          Algorithmic Coding Sheets
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm">
          Track and resolve standard problem-sets formulated by core communities.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sheets.map((sheet, idx) => (
          <div
            key={idx}
            className="group bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Target: {sheet.total} problems
                </span>
                <span className="text-[9px] font-bold text-blue-650 bg-blue-50 px-2 py-0.5 rounded-full">
                  {sheet.solved} Solved
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-800 leading-tight group-hover:text-blue-650 transition">
                {sheet.title} worksheet
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {sheet.desc}
              </p>
            </div>

            {/* Progress bar info */}
            <div className="mt-6 pt-4 border-t border-slate-100/60">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-650 mb-1.5">
                <span>Completed Tracker</span>
                <span className="text-slate-500">{sheet.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${sheet.progress}%` }}></div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default DSASheets;
