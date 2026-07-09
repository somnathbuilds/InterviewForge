import { useState } from "react";
import { Link } from "react-router-dom";

// Load all company JSON files dynamically from src/data/companies using Vite's glob import
const companyModules = import.meta.glob("../../data/companies/*.json", { eager: true });

// Assign category tags to questions based on keywords in their title
function classifyTopic(title) {
  const lower = title.toLowerCase();
  if (
    lower.includes("sum") ||
    lower.includes("anagram") ||
    lower.includes("duplicate") ||
    lower.includes("subarrays") ||
    lower.includes("array") ||
    lower.includes("matrix") ||
    lower.includes("rotate")
  ) {
    return "Arrays & Hashing";
  }
  if (
    lower.includes("linked list") ||
    lower.includes("reverse list") ||
    lower.includes("palindrome list") ||
    lower.includes("merge list") ||
    lower.includes("node")
  ) {
    return "Linked List";
  }
  if (
    lower.includes("substring") ||
    lower.includes("string") ||
    lower.includes("palindrome") ||
    lower.includes("anagram")
  ) {
    return "Strings";
  }
  if (
    lower.includes("tree") ||
    lower.includes("bst") ||
    lower.includes("binary") ||
    lower.includes("postorder") ||
    lower.includes("preorder") ||
    lower.includes("inorder") ||
    lower.includes("serialize")
  ) {
    return "Trees & BST";
  }
  if (
    lower.includes("graph") ||
    lower.includes("island") ||
    lower.includes("path") ||
    lower.includes("cycle") ||
    lower.includes("course") ||
    lower.includes("dfs") ||
    lower.includes("bfs")
  ) {
    return "Graphs";
  }
  if (
    lower.includes("dp") ||
    lower.includes("stock") ||
    lower.includes("subsequence") ||
    lower.includes("knapsack") ||
    lower.includes("climb") ||
    lower.includes("coin") ||
    lower.includes("longest common")
  ) {
    return "Dynamic Programming";
  }
  if (
    lower.includes("search") ||
    lower.includes("binary search") ||
    lower.includes("find")
  ) {
    return "Searching";
  }
  if (
    lower.includes("sort") ||
    lower.includes("sorted")
  ) {
    return "Sorting";
  }
  if (
    lower.includes("stack") ||
    lower.includes("queue") ||
    lower.includes("parentheses")
  ) {
    return "Stack & Queue";
  }
  return "General Algorithms";
}

// Compile a single de-duplicated dataset from all company files
const allProblemsMap = new Map();

Object.entries(companyModules).forEach(([filePath, module]) => {
  const fileKey = filePath.split("/").pop().replace(".json", "");
  const companyName = module.default ? module.default.company : (module.company || fileKey);
  const questions = module.default ? module.default.questions : (module.questions || []);

  questions.forEach((q) => {
    const key = q.leetcodeUrl || q.title;
    if (!allProblemsMap.has(key)) {
      allProblemsMap.set(key, {
        id: q.id,
        name: q.title,
        difficulty: q.difficulty,
        topic: classifyTopic(q.title),
        acceptance: q.acceptance || "50%",
        frequency: q.frequency || "50%",
        companies: [companyName],
        leetcodeUrl: q.leetcodeUrl,
        favorite: false,
        solved: false
      });
    } else {
      const existing = allProblemsMap.get(key);
      if (!existing.companies.includes(companyName)) {
        existing.companies.push(companyName);
      }
    }
  });
});

const compiledProblemsList = Array.from(allProblemsMap.values()).sort((a, b) => b.id - a.id);

// Extract filter parameters
const dynamicCompanies = ["All", ...new Set(compiledProblemsList.flatMap((p) => p.companies))].sort();
const dynamicTopics = ["All", ...new Set(compiledProblemsList.map((p) => p.topic))].sort();
const uniqueDifficulties = ["All", "Easy", "Medium", "Hard"];

function DSADashboard() {
  const [problems, setProblems] = useState(compiledProblemsList);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [visibleCount, setVisibleCount] = useState(50);

  const handleToggleFavorite = (id) => {
    setProblems(
      problems.map((prob) =>
        prob.id === id ? { ...prob, favorite: !prob.favorite } : prob
      )
    );
  };

  const handleToggleSolved = (id) => {
    setProblems(
      problems.map((prob) =>
        prob.id === id ? { ...prob, solved: !prob.solved } : prob
      )
    );
  };

  // Combined Multi-Filter
  const filteredProblems = problems.filter((prob) => {
    const matchesSearch = prob.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "All" || prob.difficulty === selectedDifficulty;
    const matchesTopic = selectedTopic === "All" || prob.topic === selectedTopic;
    const matchesCompany = selectedCompany === "All" || prob.companies.includes(selectedCompany);
    return matchesSearch && matchesDifficulty && matchesTopic && matchesCompany;
  });

  // Calculate difficulty metrics dynamically based on the filtered list
  let easyCount = 0;
  let mediumCount = 0;
  let hardCount = 0;

  filteredProblems.forEach((p) => {
    if (p.difficulty === "Easy") easyCount++;
    else if (p.difficulty === "Medium") mediumCount++;
    else if (p.difficulty === "Hard") hardCount++;
  });

  const displayedProblems = filteredProblems.slice(0, visibleCount);

  return (
    <div className="space-y-4">
      
      {/* Header Area */}
      <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
        <div>
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
            DSA Workspace
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight mt-2.5">
            DSA Dashboard
          </h1>
          <p className="text-slate-550 text-xs">
            Dedicated problem-solving workspace. Search, filter, and master algorithmic patterns.
          </p>
        </div>

        {/* Search & Select dropdown filters */}
        <div className="flex flex-wrap items-center gap-2.5">
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
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(50);
              }}
              className="bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-9 pr-4 py-1.5 text-xs outline-none transition focus:ring-1 focus:ring-blue-500 text-slate-800 w-full sm:w-44"
            />
          </div>

          {/* Company select dropdown filter */}
          <select
            value={selectedCompany}
            onChange={(e) => {
              setSelectedCompany(e.target.value);
              setVisibleCount(50);
            }}
            className="bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl px-2.5 py-1.5 text-xs outline-none transition focus:ring-1 focus:ring-blue-500 text-slate-800 cursor-pointer max-w-[130px]"
          >
            {dynamicCompanies.map((comp, idx) => (
              <option key={idx} value={comp}>
                {comp === "All" ? "All Companies" : comp}
              </option>
            ))}
          </select>

          {/* Topic select dropdown filter */}
          <select
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value);
              setVisibleCount(50);
            }}
            className="bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl px-2.5 py-1.5 text-xs outline-none transition focus:ring-1 focus:ring-blue-500 text-slate-800 cursor-pointer max-w-[130px]"
          >
            {dynamicTopics.map((topic, idx) => (
              <option key={idx} value={topic}>
                {topic === "All" ? "All Topics" : topic}
              </option>
            ))}
          </select>

          {/* Difficulty select dropdown filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => {
              setSelectedDifficulty(e.target.value);
              setVisibleCount(50);
            }}
            className="bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl px-2.5 py-1.5 text-xs outline-none transition focus:ring-1 focus:ring-blue-500 text-slate-800 cursor-pointer"
          >
            {uniqueDifficulties.map((diff, idx) => (
              <option key={idx} value={diff}>
                {diff === "All" ? "All Difficulties" : diff}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats Cards - Height reduced by 25-30% and compact padding */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-white border border-slate-200/80 rounded-2xl py-3.5 px-4 shadow-sm">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Syllabus</span>
          <h3 className="text-base sm:text-lg font-extrabold text-slate-800 mt-1">{filteredProblems.length} Problems</h3>
        </div>
        <div className="bg-white border border-slate-200/80 rounded-2xl py-3.5 px-4 shadow-sm">
          <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Easy Tasks</span>
          <h3 className="text-base sm:text-lg font-extrabold text-emerald-600 mt-1">{easyCount} Checked</h3>
        </div>
        <div className="bg-white border border-slate-200/80 rounded-2xl py-3.5 px-4 shadow-sm">
          <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Medium Tasks</span>
          <h3 className="text-base sm:text-lg font-extrabold text-amber-500 mt-1">{mediumCount} Tasks</h3>
        </div>
        <div className="bg-white border border-slate-200/80 rounded-2xl py-3.5 px-4 shadow-sm">
          <span className="text-[9px] font-bold text-rose-500 uppercase tracking-widest">Hard Tasks</span>
          <h3 className="text-base sm:text-lg font-extrabold text-rose-500 mt-1">{hardCount} Tasks</h3>
        </div>
      </div>

      {/* Expanded Table list - Row height compacted */}
      <div className="w-full bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest w-16">Status</th>
                <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Problem Name</th>
                <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Difficulty</th>
                <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Topic</th>
                <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Acceptance</th>
                <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Frequency</th>
                <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Company Tags</th>
                <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Favorite</th>
                <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/85">
              {displayedProblems.map((prob) => (
                <tr key={prob.id} className="hover:bg-slate-50/50 transition">
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <button
                      onClick={() => handleToggleSolved(prob.id)}
                      className="w-4.5 h-4.5 rounded flex items-center justify-center transition border cursor-pointer border-slate-300"
                      style={prob.solved ? { backgroundColor: "#10b981", borderColor: "#10b981", color: "#fff" } : {}}
                    >
                      {prob.solved && (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-3.5">
                    <span className={`text-xs font-semibold leading-tight ${prob.solved ? "text-slate-400 line-through font-medium" : "text-slate-800"}`}>
                      {prob.name}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border leading-none ${
                      prob.difficulty === "Easy"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                        : prob.difficulty === "Medium"
                        ? "bg-amber-50 text-amber-700 border-amber-100"
                        : "bg-rose-50 text-rose-700 border-rose-100"
                    }`}>
                      {prob.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <span className="text-[11px] text-slate-500 font-medium">
                      {prob.topic}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <span className="text-xs font-semibold text-slate-600">
                      {prob.acceptance}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <span className="text-xs font-semibold text-slate-655">
                      {prob.frequency}
                    </span>
                  </td>
                  <td className="px-6 py-3.5">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {prob.companies.slice(0, 4).map((company, cidx) => (
                        <span
                          key={cidx}
                          onClick={() => setSelectedCompany(company)}
                          className="text-[8px] font-bold bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 px-1.5 py-0.5 rounded transition cursor-pointer select-none border border-transparent hover:border-blue-100"
                          title={`Filter by ${company}`}
                        >
                          {company}
                        </span>
                      ))}
                      {prob.companies.length > 4 && (
                        <span className="text-[8px] font-semibold text-slate-400 px-0.5 self-center">
                          +{prob.companies.length - 4}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <button
                      onClick={() => handleToggleFavorite(prob.id)}
                      className="text-slate-300 hover:text-amber-400 transition cursor-pointer active:scale-95"
                    >
                      {prob.favorite ? (
                        <svg className="w-4.5 h-4.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ) : (
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-3.5 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <Link
                        to={`/dsa/problem/${prob.id}`}
                        className="text-[11px] bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-lg transition inline-block select-none active:scale-95 shadow-sm hover:shadow"
                      >
                        View Details
                      </Link>
                      <a
                        href={prob.leetcodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] bg-slate-50 hover:bg-blue-50 text-slate-655 hover:text-blue-600 border border-slate-200/80 hover:border-blue-100 font-bold px-3 py-1.5 rounded-lg transition inline-block select-none"
                      >
                        Solve on LeetCode
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Load More Button for large list pagination optimization */}
        {filteredProblems.length > visibleCount && (
          <div className="text-center py-4 border-t border-slate-100 bg-slate-50/50">
            <button
              onClick={() => setVisibleCount((prev) => prev + 50)}
              className="bg-white hover:bg-slate-50 text-blue-600 border border-slate-200 text-xs font-bold px-5 py-1.5 rounded-lg shadow-sm transition active:scale-95 cursor-pointer"
            >
              Load More Problems
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

export default DSADashboard;
