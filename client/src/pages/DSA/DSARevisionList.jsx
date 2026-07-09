function DSARevisionList() {
  const revisionItems = [
    { name: "Longest Palindromic Substring", reason: "Fumbled time complexity (O(N^2) expansion vs Manacher)", daysLeft: 2 },
    { name: "Course Schedule", reason: "Revise topological sort (Kahn's algorithm vs DFS cycle detection)", daysLeft: 4 },
    { name: "Median of Two Sorted Arrays", reason: "Re-analyze binary search partitioning index logic", daysLeft: 5 }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
          Memory Logs
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-3">
          Revision Checklist
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm">
          Keep track of fumbled questions and logic topics flagged for review intervals.
        </p>
      </div>

      {/* Revision Cards */}
      <div className="space-y-4">
        {revisionItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row justify-between sm:items-center gap-4"
          >
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-800 leading-tight">
                {item.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 font-medium leading-relaxed">
                <strong>Notes:</strong> {item.reason}
              </p>
            </div>
            
            <div className="flex items-center gap-4 self-start sm:self-auto">
              <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                Review in {item.daysLeft} days
              </span>
              <button className="text-blue-600 hover:text-blue-700 text-xs font-bold transition cursor-pointer select-none">
                Start Practice
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default DSARevisionList;
