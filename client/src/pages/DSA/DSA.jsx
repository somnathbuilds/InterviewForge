import { useState } from "react";
import { dsaStats, dsaProblems, dsaSidebarData } from "../../data/dsaData";

function DSA() {
  // Problems state to allow dynamic favoriting and status toggles
  const [problems, setProblems] = useState(dsaProblems);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");

  // Toggle favorite trigger
  const handleToggleFavorite = (id) => {
    setProblems(
      problems.map((prob) =>
        prob.id === id ? { ...prob, favorite: !prob.favorite } : prob
      )
    );
  };

  // Toggle solved trigger
  const handleToggleSolved = (id) => {
    setProblems(
      problems.map((prob) =>
        prob.id === id ? { ...prob, solved: !prob.solved } : prob
      )
    );
  };

  // Extract unique topics for dropdown
  const uniqueTopics = ["All", ...new Set(dsaProblems.map((p) => p.topic))];

  // Local filtering logic
  const filteredProblems = problems.filter((prob) => {
    const matchesSearch = prob.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "All" || prob.difficulty === selectedDifficulty;
    const matchesTopic = selectedTopic === "All" || prob.topic === selectedTopic;
    return matchesSearch && matchesDifficulty && matchesTopic;
  });

  return (
    <div className="space-y-6">
      
      {/* 1. Header Area with Filters */}
      <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
            Preparation Arena
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-3">
            DSA Preparation
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm">
            Practice algorithmic sheets, bookmark targets, and trace completion ratings.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          {/* Search box */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 pointer-events-none">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search problems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm outline-none transition focus:ring-1 focus:ring-blue-500 text-slate-800 w-full sm:w-60"
            />
          </div>

          {/* Topic Selector */}
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl px-3 py-2 text-xs sm:text-sm outline-none transition focus:ring-1 focus:ring-blue-500 text-slate-800 cursor-pointer"
          >
            {uniqueTopics.map((topic, idx) => (
              <option key={idx} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Difficulty Filter Toggle Strip */}
      <div className="flex flex-wrap items-center gap-2">
        {["All", "Easy", "Medium", "Hard"].map((difficulty) => {
          const isActive = selectedDifficulty === difficulty;
          return (
            <button
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition cursor-pointer select-none ${
                isActive
                  ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-500/25"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              {difficulty}
            </button>
          );
        })}
      </div>

      {/* 2. Statistics Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4.5">
        
        {/* Total problems */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Syllabus</span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mt-2">{dsaStats.total} Problems</h3>
        </div>

        {/* Solved Problems */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Solved</span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-emerald-600 mt-2">{dsaStats.solved} Checked</h3>
        </div>

        {/* Remaining Problems */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Remaining</span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-500 mt-2">{dsaStats.remaining} Tasks</h3>
        </div>

        {/* Current streak */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Streak count</span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-amber-500 mt-2 flex items-center gap-1.5">
            🔥 {dsaStats.streak} Days
          </h3>
        </div>

      </div>

      {/* Workspace Column Grid */}
      <div className="flex flex-col lg:flex-row items-start gap-6">
        
        {/* 3. Problem Table Container */}
        <div className="flex-1 w-full bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Problem Name</th>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Difficulty</th>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Topic</th>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company Tags</th>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Favorite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/80">
                {filteredProblems.map((prob) => (
                  <tr key={prob.id} className="hover:bg-slate-50/50 transition">
                    
                    {/* Status checkbox */}
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleSolved(prob.id)}
                        className={`w-5 h-5 rounded flex items-center justify-center transition border cursor-pointer ${
                          prob.solved
                            ? "bg-emerald-500 border-emerald-500 text-white"
                            : "border-slate-300 hover:border-slate-400"
                        }`}
                      >
                        {prob.solved && (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    </td>

                    {/* Problem Name */}
                    <td className="px-6 py-4.5">
                      <span className={`text-xs sm:text-sm font-semibold leading-tight ${prob.solved ? "text-slate-400 line-through font-medium" : "text-slate-800"}`}>
                        {prob.name}
                      </span>
                    </td>

                    {/* Difficulty Badge */}
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border leading-none ${
                        prob.difficulty === "Easy"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                          : prob.difficulty === "Medium"
                          ? "bg-amber-50 text-amber-700 border-amber-100"
                          : "bg-rose-50 text-rose-700 border-rose-100"
                      }`}>
                        {prob.difficulty}
                      </span>
                    </td>

                    {/* Topic Name */}
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                        {prob.topic}
                      </span>
                    </td>

                    {/* Company tags list */}
                    <td className="px-6 py-4.5">
                      <div className="flex flex-wrap gap-1.5 max-w-xs">
                        {prob.companies.map((company, cidx) => (
                          <span key={cidx} className="text-[9px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                            {company}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Star Favorite Bookmark */}
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleFavorite(prob.id)}
                        className="text-slate-300 hover:text-amber-400 transition cursor-pointer active:scale-95"
                      >
                        {prob.favorite ? (
                          <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        )}
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Empty State */}
          {filteredProblems.length === 0 && (
            <div className="py-12 flex flex-col items-center justify-center text-slate-400">
              <svg className="w-10 h-10 text-slate-350 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-xs font-semibold">No questions match active filters.</p>
            </div>
          )}
        </div>

        {/* 4. Right Sidebar panel */}
        <div className="w-full lg:w-80 shrink-0 space-y-6">
          
          {/* Today's Goal */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Today's Focus</span>
            <div className="mt-3.5 p-3.5 bg-blue-50/50 border border-blue-100 rounded-xl">
              <h4 className="text-xs font-bold text-slate-800 leading-tight">Daily Target Goal</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {dsaSidebarData.todayGoal}
              </p>
            </div>
          </div>

          {/* Weekly progress mini-chart */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Weekly Solved</span>
              <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                Active Week
              </span>
            </div>
            
            {/* Simple mini bar graph */}
            <div className="h-28 flex items-end gap-2.5 pt-4">
              {dsaSidebarData.weeklySolved.map((item, idx) => {
                const maxVal = Math.max(...dsaSidebarData.weeklySolved.map((d) => d.count));
                const heightPercent = `${(item.count / maxVal) * 100}%`;
                
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full gap-1 group relative">
                    <div
                      className="w-full bg-blue-500 hover:bg-blue-600 rounded-t-sm transition-all duration-200 shadow-sm shadow-blue-500/10 cursor-pointer"
                      style={{ height: heightPercent }}
                    ></div>
                    <span className="text-[8px] font-bold text-slate-400 uppercase leading-none">{item.day[0]}</span>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] px-1.5 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                      {item.count}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Topic wise Completion breakdown */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Topic Mastery</span>
            <div className="space-y-3.5">
              {dsaSidebarData.topicCompletion.map((topic, idx) => {
                const completionPercent = Math.round((topic.solved / topic.total) * 100);

                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-700 leading-tight">
                      <span className="truncate max-w-[150px]">{topic.topic}</span>
                      <span className="text-[10px] text-slate-400 shrink-0 font-medium">
                        {topic.solved}/{topic.total} Solved
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${completionPercent}%` }}></div>
                      </div>
                      <span className="text-[9px] font-bold text-slate-500 shrink-0 w-8 text-right">{completionPercent}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default DSA;
