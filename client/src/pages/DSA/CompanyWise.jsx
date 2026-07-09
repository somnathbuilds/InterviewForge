import { useState } from "react";
import { Link } from "react-router-dom";

// Load all company JSON files dynamically from src/data/companies using Vite's glob import
const companyModules = import.meta.glob("../../data/companies/*.json", { eager: true });

// Parse and map the imported modules
const allCompaniesData = Object.entries(companyModules).map(([filePath, module]) => {
  const fileKey = filePath.split("/").pop().replace(".json", "");
  const questions = module.default ? module.default.questions : (module.questions || []);
  const companyName = module.default ? module.default.company : (module.company || fileKey);
  
  // Calculate difficulty distribution
  let easyCount = 0;
  let mediumCount = 0;
  let hardCount = 0;

  questions.forEach((q) => {
    if (q.difficulty === "Easy") easyCount++;
    else if (q.difficulty === "Medium") mediumCount++;
    else if (q.difficulty === "Hard") hardCount++;
  });

  return {
    key: fileKey,
    name: companyName,
    totalQuestions: questions.length,
    difficulty: {
      easy: easyCount,
      medium: mediumCount,
      hard: hardCount
    }
  };
}).sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name

function CompanyWise() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(24);

  // Filter based on search query
  const filteredCompanies = allCompaniesData.filter((comp) =>
    comp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedCompanies = filteredCompanies.slice(0, visibleCount);

  return (
    <div className="space-y-6">
      
      {/* Header Block */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
            Company Tracking
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-3">
            Company Wise Questions
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm">
            Practice target corporate assessment sheets containing frequently tagged questions.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative shrink-0">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search company (e.g. Google)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(24); // Reset pagination on search
            }}
            className="bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm outline-none transition focus:ring-1 focus:ring-blue-500 text-slate-800 w-full md:w-64"
          />
        </div>
      </div>

      {/* Meta indicators */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
        <span>Total Companies: <span className="text-blue-600 font-bold">{filteredCompanies.length}</span></span>
        {searchQuery && (
          <span>Showing matches for "{searchQuery}"</span>
        )}
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCompanies.map((comp) => (
          <div
            key={comp.key}
            className="group bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Logo & Total Questions */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-extrabold text-lg shadow-sm border border-blue-100 shrink-0">
                  {comp.name.charAt(0)}
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/50 self-center">
                  {comp.totalQuestions} Questions
                </span>
              </div>

              {/* Company Info */}
              <h3 className="text-base font-extrabold text-slate-800 leading-tight group-hover:text-blue-650 transition">
                {comp.name}
              </h3>
              
              {/* Difficulty Distribution strip */}
              <div className="grid grid-cols-3 gap-2 mt-4.5 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100 text-center text-[10px] font-bold">
                <div>
                  <span className="text-emerald-600 block">Easy</span>
                  <span className="text-slate-700 font-extrabold mt-0.5 block">{comp.difficulty.easy}</span>
                </div>
                <div className="border-x border-slate-200/60">
                  <span className="text-amber-600 block">Medium</span>
                  <span className="text-slate-700 font-extrabold mt-0.5 block">{comp.difficulty.medium}</span>
                </div>
                <div>
                  <span className="text-rose-600 block">Hard</span>
                  <span className="text-slate-700 font-extrabold mt-0.5 block">{comp.difficulty.hard}</span>
                </div>
              </div>
            </div>

            {/* Link button to questions page */}
            <div className="mt-6 pt-4 border-t border-slate-100/60">
              <Link
                to={`/dsa/company-wise/${comp.key}`}
                className="w-full text-center block bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-bold py-2.5 rounded-xl transition duration-200 border border-slate-200/65 hover:border-blue-650 active:scale-98"
              >
                Start Preparing
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Load More trigger */}
      {filteredCompanies.length > visibleCount && (
        <div className="text-center pt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 24)}
            className="bg-white hover:bg-slate-50 text-blue-600 border border-slate-200 text-xs sm:text-sm font-bold px-8 py-3 rounded-xl shadow-sm hover:shadow active:scale-95 transition cursor-pointer"
          >
            Load More Companies
          </button>
        </div>
      )}

      {/* Empty State */}
      {filteredCompanies.length === 0 && (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-16 text-center text-slate-400 bg-white/50">
          <svg className="w-12 h-12 text-slate-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h4 className="text-sm font-bold text-slate-650">No company sheets found.</h4>
          <p className="text-xs text-slate-400 mt-1">Try another search filter matching the folder names.</p>
        </div>
      )}

    </div>
  );
}

export default CompanyWise;
