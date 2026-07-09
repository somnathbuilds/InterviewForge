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

  // Calculate a deterministic readiness score based on questions metrics
  const readinessScore = Math.round(((easyCount * 0.4 + mediumCount * 0.75 + hardCount * 1.0) / (questions.length || 1)) * 30 + 65);
  const constrainedReadiness = Math.min(Math.max(readinessScore, 68), 98);

  return {
    key: fileKey,
    name: companyName,
    totalQuestions: questions.length,
    readiness: constrainedReadiness,
    difficulty: {
      easy: easyCount,
      medium: mediumCount,
      hard: hardCount
    }
  };
});

// Explicit top 20 popular list order
const popularKeys = [
  "amazon", "google", "microsoft", "meta", "adobe", "apple", "uber",
  "atlassian", "goldman-sachs", "oracle", "flipkart", "walmart-labs",
  "netflix", "paypal", "linkedin", "salesforce", "cisco", "bloomberg",
  "vmware", "intuit"
];

// Alphabetical sort fallback for non-popular lists
const sortedAlphabetical = [...allCompaniesData].sort((a, b) => a.name.localeCompare(b.name));

// Get pre-sorted popular list matching the explicit index
const popularCompanies = popularKeys
  .map((key) => allCompaniesData.find((c) => c.key === key))
  .filter(Boolean);

function CompanyWise() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);

  // Filter and display list
  const getFilteredList = () => {
    if (searchQuery) {
      // Search filters across all 654 companies
      return sortedAlphabetical.filter((comp) =>
        comp.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (showAll) {
      return sortedAlphabetical;
    }

    return popularCompanies;
  };

  const filteredList = getFilteredList();
  const displayedCompanies = showAll || searchQuery ? filteredList.slice(0, visibleCount) : filteredList;

  return (
    <div className="space-y-6">
      
      {/* Header Panel */}
      <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-6 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
            Placement Targets
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-1.5">
            Company Wise DSA
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm">
            Solve problems asked by target recruiters and test mock match levels.
          </p>
        </div>

        {/* Search Field */}
        <div className="relative shrink-0">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search company..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(24); // Reset pagination limits on search
            }}
            className="bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm outline-none transition focus:ring-1 focus:ring-blue-500 text-slate-800 w-full sm:w-64"
          />
        </div>
      </div>

      {/* Meta indicators: Difficulty Legend & Totals */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-sm text-xs text-slate-500 font-semibold">
        
        {/* Total index */}
        <div className="flex items-center gap-1.5">
          <span>Total Companies:</span>
          <span className="text-blue-600 font-extrabold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
            {allCompaniesData.length}
          </span>
        </div>

        {/* Difficulty Legend */}
        <div className="flex items-center flex-wrap gap-4 select-none">
          <span className="text-[10px] uppercase font-bold text-slate-450 tracking-wider">Difficulty Legend:</span>
          <span className="flex items-center gap-1.5 font-bold">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
            Easy
          </span>
          <span className="flex items-center gap-1.5 font-bold">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
            Medium
          </span>
          <span className="flex items-center gap-1.5 font-bold">
            <span className="w-2.5 h-2.5 bg-rose-500 rounded-full"></span>
            Hard
          </span>
        </div>

      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCompanies.map((comp) => (
          <div
            key={comp.key}
            className="group bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header inside card: Logo initial & Circular Readiness Ring */}
              <div className="flex justify-between items-start mb-4.5">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-extrabold text-lg shadow-sm border border-blue-100 shrink-0">
                  {comp.name.charAt(0)}
                </div>
                
                {/* Circular progress Readiness ring */}
                <div className="relative flex items-center justify-center w-12 h-12 shrink-0 select-none">
                  <svg className="w-12 h-12 transform -rotate-90">
                    <circle cx="24" cy="24" r="20" stroke="#f1f5f9" strokeWidth="3.5" fill="transparent" />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="#2563eb"
                      strokeWidth="3.5"
                      fill="transparent"
                      strokeDasharray={125.6}
                      strokeDashoffset={125.6 * (1 - comp.readiness / 100)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-center flex flex-col items-center">
                    <span className="text-[10px] font-extrabold text-slate-800 leading-none">{comp.readiness}%</span>
                    <span className="text-[5px] font-bold text-slate-400 uppercase tracking-tight mt-0.5 leading-none">Match</span>
                  </div>
                </div>
              </div>

              {/* Company Meta */}
              <h3 className="text-base font-extrabold text-slate-800 leading-tight group-hover:text-blue-600 transition">
                {comp.name}
              </h3>
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider block mt-1">
                {comp.totalQuestions} Questions total
              </span>
              
              {/* Difficulty stats strip */}
              <div className="grid grid-cols-3 gap-2 mt-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center text-[10px] font-bold">
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

            {/* CTA Practice Sheet button */}
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

      {/* Toggles and pagination controls */}
      {!showAll && !searchQuery && (
        <div className="text-center pt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-white hover:bg-slate-50 text-blue-600 border border-slate-200 text-xs sm:text-sm font-bold px-8 py-3.5 rounded-xl shadow-sm hover:shadow active:scale-95 transition cursor-pointer select-none"
          >
            View All Companies
          </button>
        </div>
      )}

      {(showAll || searchQuery) && filteredList.length > visibleCount && (
        <div className="text-center pt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 24)}
            className="bg-white hover:bg-slate-50 text-blue-600 border border-slate-200 text-xs sm:text-sm font-bold px-8 py-3.5 rounded-xl shadow-sm hover:shadow active:scale-95 transition cursor-pointer select-none"
          >
            Load More Companies
          </button>
        </div>
      )}

      {/* Empty Search panel */}
      {filteredList.length === 0 && (
        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-16 text-center text-slate-400 bg-white/50">
          <svg className="w-12 h-12 text-slate-350 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
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
