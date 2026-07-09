function ProgressOverview() {
  const categories = [
    {
      title: "DSA preparation",
      value: "142 / 200",
      description: "Solved questions",
      progress: 71,
      color: "from-blue-600 to-blue-500",
      accent: "bg-blue-50 text-blue-600",
      labels: [
        { name: "Easy", count: "80", color: "bg-emerald-500" },
        { name: "Medium", count: "50", color: "bg-amber-500" },
        { name: "Hard", count: "12", color: "bg-rose-500" },
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Aptitude training",
      value: "86 / 100",
      description: "Modules mastered",
      progress: 86,
      color: "from-indigo-600 to-indigo-500",
      accent: "bg-indigo-50 text-indigo-600",
      labels: [
        { name: "Quantitative", count: "90%", color: "bg-indigo-600" },
        { name: "Logical", count: "85%", color: "bg-indigo-400" },
        { name: "Verbal", count: "82%", color: "bg-indigo-300" },
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Core cs subjects",
      value: "18 / 25",
      description: "Completed modules",
      progress: 72,
      color: "from-violet-600 to-violet-500",
      accent: "bg-violet-50 text-violet-600",
      labels: [
        { name: "DBMS", count: "85%", color: "bg-violet-600" },
        { name: "OS & CN", count: "74%", color: "bg-violet-400" },
        { name: "System Design", count: "55%", color: "bg-violet-300" },
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className="group bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
        >
          {/* Header Row */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                  {cat.title}
                </span>
                <div className="flex items-baseline gap-2 mt-1.5">
                  <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight leading-none">
                    {cat.value}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-semibold">{cat.description}</span>
                </div>
              </div>
              <div className={`w-10 h-10 rounded-xl ${cat.accent} flex items-center justify-center shrink-0`}>
                {cat.icon}
              </div>
            </div>

            {/* Linear Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-[10px] font-semibold text-slate-500 mb-1.5">
                <span>Progress Score</span>
                <span className="font-bold text-slate-700">{cat.progress}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-500`} style={{ width: `${cat.progress}%` }}></div>
              </div>
            </div>
          </div>

          {/* Sub level labels */}
          <div className="flex justify-between items-center gap-1.5 pt-4.5 border-t border-slate-100/60">
            {cat.labels.map((lbl, lIdx) => (
              <div key={lIdx} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${lbl.color} shrink-0`}></span>
                <span className="text-[10px] font-medium text-slate-500 leading-none">
                  {lbl.name}: <strong className="text-slate-700">{lbl.count}</strong>
                </span>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default ProgressOverview;
