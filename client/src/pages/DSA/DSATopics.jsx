function DSATopics() {
  const topics = [
    { name: "Arrays & Hashing", solved: 42, total: 50, desc: "Two Sum, Contain Duplicate, Valid Anagram" },
    { name: "Two Pointers", solved: 15, total: 25, desc: "Valid Palindrome, Container with Water, 3Sum" },
    { name: "Sliding Window", solved: 12, total: 20, desc: "Stock Profit, Longest Unique Substring" },
    { name: "LinkedLists", solved: 15, total: 30, desc: "Reverse LinkedList, Merge Lists, Cycle Detection" },
    { name: "Trees & BSTs", solved: 22, total: 45, desc: "Invert Binary Tree, Max Depth, Level Order Traversal" },
    { name: "Graphs", solved: 18, total: 60, desc: "Number of Islands, Clone Graph, Course Schedule" },
    { name: "Dynamic Programming", solved: 10, total: 50, desc: "Climbing Stairs, Coin Change, LCS" }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
          Mastery Breakdown
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-3">
          Topic Wise Problems
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm">
          Focus and master individual coding segments one topic at a time.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((top, idx) => {
          const percent = Math.round((top.solved / top.total) * 100);
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-slate-800 leading-tight">
                  {top.name}
                </h3>
                <p className="text-[11px] text-slate-400 font-semibold mt-1 leading-normal">
                  Common keys: {top.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100/60">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-650 mb-1.5">
                  <span>Topic Completion</span>
                  <span className="text-slate-500">{top.solved} / {top.total} ({percent}%)</span>
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

export default DSATopics;
