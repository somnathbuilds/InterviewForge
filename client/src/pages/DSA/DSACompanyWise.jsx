function DSACompanyWise() {
  const companies = [
    { name: "Google", logoLetter: "G", solved: 42, total: 120, matchScore: 92, badgeColor: "blue" },
    { name: "Microsoft", logoLetter: "M", solved: 35, total: 95, matchScore: 85, badgeColor: "emerald" },
    { name: "Amazon", logoLetter: "A", solved: 50, total: 150, matchScore: 80, badgeColor: "amber" },
    { name: "Meta", logoLetter: "∞", solved: 18, total: 80, matchScore: 88, badgeColor: "indigo" },
    { name: "Apple", logoLetter: "", solved: 10, total: 60, matchScore: 78, badgeColor: "slate" },
    { name: "Netflix", logoLetter: "N", solved: 8, total: 50, matchScore: 72, badgeColor: "rose" }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
          Placement Tracks
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-3">
          Company Wise Questions
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm">
          Filter and practice questions frequently asked in target tech corporate assessments.
        </p>
      </div>

      {/* Grid of Companies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((comp, idx) => {
          const percent = Math.round((comp.solved / comp.total) * 100);
          return (
            <div
              key={idx}
              className="group bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-11 h-11 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center justify-center font-extrabold text-slate-800 text-lg shadow-sm">
                    {comp.logoLetter}
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                    Match Rate: {comp.matchScore}%
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-slate-800 leading-tight group-hover:text-blue-650 transition">
                  {comp.name} Prep Track
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Frequently tagged online assessment and mock questions.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100/60">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1.5">
                  <span>Solved Progress</span>
                  <span className="text-slate-500 font-medium">
                    {comp.solved}/{comp.total} ({percent}%)
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: `${percent}%` }}></div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}

export default DSACompanyWise;
