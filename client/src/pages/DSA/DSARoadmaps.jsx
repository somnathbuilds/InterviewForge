function DSARoadmaps() {
  const roadmaps = [
    { title: "DSA Fundamentals", desc: "For absolute beginners. Master Arrays, Strings, Searching, Sorting, and Time Complexity analyses.", steps: 5, active: true },
    { title: "Data Structures Core", desc: "Revise linear & non-linear structures. Focus on LinkedLists, Stacks, Queues, Binary Trees, and BSTs.", steps: 7, active: true },
    { title: "Advanced Algorithms", desc: "Master Dynamic Programming, Graphs, DFS/BFS, Backtracking, and Greedy heuristics.", steps: 10, active: false },
    { title: "FAANG Placement Prep", desc: "Top 150 corporate tagged coding patterns commonly tested in interviews.", steps: 12, active: false }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
          Structured Milestones
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-3">
          DSA Preparation Roadmaps
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm">
          Follow target milestones from coding basics up to advanced algorithms.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roadmaps.map((road, idx) => (
          <div
            key={idx}
            className="group bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                  {road.steps} Milestones
                </span>
                <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full border ${
                  road.active
                    ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                    : "bg-slate-50 text-slate-400 border-slate-200"
                }`}>
                  {road.active ? "In Progress" : "Locked"}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-800 leading-tight group-hover:text-blue-650 transition">
                {road.title} Roadmap
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {road.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] text-slate-400 font-medium">Estimated track: 3-4 weeks</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition cursor-pointer active:scale-95">
                {road.active ? "Continue Path" : "Unlock Track"}
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default DSARoadmaps;
