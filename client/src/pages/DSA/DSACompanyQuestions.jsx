import { useState } from "react";
import { useParams, Link } from "react-router-dom";

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

function DSACompanyQuestions() {
  const { companyName } = useParams();
  const fileKey = companyName ? companyName.toLowerCase() : "";

  // Dynamic fetch helper
  const getInitialQuestions = (keyVal) => {
    const targetKey = keyVal || fileKey;
    const filePath = `../../data/companies/${targetKey}.json`;
    const targetModule = companyModules[filePath] || Object.values(companyModules).find(
      (mod) => (mod.default?.company?.toLowerCase() === targetKey) || (mod.company?.toLowerCase() === targetKey)
    );

    if (targetModule) {
      const data = targetModule.default || targetModule;
      return (data.questions || []).map((q) => ({
        id: q.id,
        name: q.title,
        difficulty: q.difficulty,
        topic: classifyTopic(q.title),
        acceptance: q.acceptance || "50%",
        frequency: q.frequency || "50%",
        companies: [data.company],
        leetcodeUrl: q.leetcodeUrl,
        favorite: false,
        solved: false
      }));
    }
    return [];
  };

  // State synchronization on route parameter changes during render
  const [prevCompany, setPrevCompany] = useState(companyName);
  const [questions, setQuestions] = useState(() => getInitialQuestions(fileKey));

  if (companyName !== prevCompany) {
    setPrevCompany(companyName);
    setQuestions(getInitialQuestions(fileKey));
  }

  // Derive Display Company Name dynamically
  const filePath = `../../data/companies/${fileKey}.json`;
  const targetModule = companyModules[filePath] || Object.values(companyModules).find(
    (mod) => (mod.default?.company?.toLowerCase() === fileKey) || (mod.company?.toLowerCase() === fileKey)
  );
  const displayCompanyName = targetModule
    ? (targetModule.default?.company || targetModule.company || companyName)
    : companyName.charAt(0).toUpperCase() + companyName.slice(1);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [visibleCount, setVisibleCount] = useState(50);

  const handleToggleFavorite = (id) => {
    setQuestions(
      questions.map((prob) =>
        prob.id === id ? { ...prob, favorite: !prob.favorite } : prob
      )
    );
  };

  const handleToggleSolved = (id) => {
    setQuestions(
      questions.map((prob) =>
        prob.id === id ? { ...prob, solved: !prob.solved } : prob
      )
    );
  };

  // Filters application
  const filteredProblems = questions.filter((prob) => {
    const matchesSearch = prob.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "All" || prob.difficulty === selectedDifficulty;
    const matchesTopic = selectedTopic === "All" || prob.topic === selectedTopic;
    return matchesSearch && matchesDifficulty && matchesTopic;
  });

  const displayedProblems = filteredProblems.slice(0, visibleCount);

  // Dynamic filter list parameters
  const dynamicTopics = ["All", ...new Set(questions.map((p) => p.topic))].sort();
  const uniqueDifficulties = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="space-y-4">
      
      {/* Back breadcrumb and Header */}
      <div>
        <Link
          to="/dsa/company-wise"
          className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-750 transition mb-3 select-none"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Companies
        </Link>

        <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
          <div>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
              Recruiter Track
            </span>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight mt-2.5">
              {displayCompanyName} Placement Prep
            </h1>
            <p className="text-slate-500 text-xs mt-1">
              Top curated coding challenges asked in {displayCompanyName} technical interviews.
            </p>
          </div>

          {/* Table Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 pointer-events-none">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(50);
                }}
                className="bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-9 pr-4 py-1.5 text-xs outline-none transition focus:ring-1 focus:ring-blue-500 text-slate-800 w-full sm:w-44"
              />
            </div>

            {/* Topic Filter */}
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

            {/* Difficulty filter */}
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
      </div>

      {/* Meta count banner */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold bg-white p-3 px-5 rounded-xl border border-slate-200/50 shadow-sm">
        <span>Questions Matching: <span className="text-blue-600 font-bold">{filteredProblems.length}</span> / {questions.length}</span>
        <div className="flex items-center gap-3 text-[10px] uppercase font-bold text-slate-400">
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span> Easy</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span> Medium</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-rose-500 rounded-full"></span> Hard</span>
        </div>
      </div>

      {/* Questions list Table wrapper */}
      <div className="w-full bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
        {displayedProblems.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest w-16">Solved</th>
                  <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Problem Name</th>
                  <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Difficulty</th>
                  <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Topic</th>
                  <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Acceptance</th>
                  <th className="px-6 py-3.5 text-left text-[9px] font-bold text-slate-400 uppercase tracking-widest">Frequency</th>
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
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
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
                      <div className="flex items-center gap-2">
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
        ) : (
          <div className="py-16 text-center text-slate-400 bg-white/50">
            <svg className="w-12 h-12 text-slate-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h4 className="text-sm font-bold text-slate-650">No company preparation questions match filters.</h4>
            <p className="text-xs text-slate-400 mt-1">Try another search or remove dropdown selectors.</p>
          </div>
        )}

        {/* Load More Button for large list pagination optimization */}
        {filteredProblems.length > visibleCount && (
          <div className="text-center py-4 border-t border-slate-100 bg-slate-50/50">
            <button
              onClick={() => setVisibleCount((prev) => prev + 50)}
              className="bg-white hover:bg-slate-50 text-blue-600 border border-slate-200 text-xs font-bold px-5 py-1.5 rounded-lg shadow-sm transition active:scale-95 cursor-pointer select-none"
            >
              Load More Problems
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

export default DSACompanyQuestions;
