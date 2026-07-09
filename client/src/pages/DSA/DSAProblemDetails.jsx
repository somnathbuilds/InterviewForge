import { useState } from "react";
import { useParams } from "react-router-dom";

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
        acceptance: q.acceptance || "55%",
        frequency: q.frequency || "50%",
        companies: [companyName],
        leetcodeUrl: q.leetcodeUrl
      });
    } else {
      const existing = allProblemsMap.get(key);
      if (!existing.companies.includes(companyName)) {
        existing.companies.push(companyName);
      }
    }
  });
});

const compiledProblemsList = Array.from(allProblemsMap.values());

function DSAProblemDetails() {
  const { id } = useParams();

  // Find problem matching ID
  const problem = compiledProblemsList.find((p) => String(p.id) === String(id)) || compiledProblemsList[0] || {
    id: 1,
    name: "Two Sum",
    difficulty: "Easy",
    topic: "Arrays & Hashing",
    companies: ["Amazon", "Google"],
    leetcodeUrl: "https://leetcode.com/problems/two-sum",
    acceptance: "50%",
    frequency: "90%"
  };

  const [activeTab, setActiveTab] = useState("description");
  const [code, setCode] = useState(
    `class Solution {\npublic:\n    vector<int> solveProblem(vector<int>& nums) {\n        // Write your solution logic here\n        return {};\n    }\n};`
  );

  // Persistence local states for note, favorite and solved toggles
  const [prevId, setPrevId] = useState(id);
  const [noteText, setNoteText] = useState(() => localStorage.getItem(`notes_${problem.id}`) || "");
  const [isFavorite, setIsFavorite] = useState(() => localStorage.getItem(`fav_${problem.id}`) === "true");
  const [isSolved, setIsSolved] = useState(() => localStorage.getItem(`solved_${problem.id}`) === "true");

  if (id !== prevId) {
    setPrevId(id);
    setNoteText(localStorage.getItem(`notes_${problem.id}`) || "");
    setIsFavorite(localStorage.getItem(`fav_${problem.id}`) === "true");
    setIsSolved(localStorage.getItem(`solved_${problem.id}`) === "true");
  }

  const handleNoteChange = (text) => {
    setNoteText(text);
    localStorage.setItem(`notes_${problem.id}`, text);
  };

  const handleToggleFavorite = () => {
    const nextVal = !isFavorite;
    setIsFavorite(nextVal);
    localStorage.setItem(`fav_${problem.id}`, String(nextVal));
  };

  const handleToggleSolved = () => {
    const nextVal = !isSolved;
    setIsSolved(nextVal);
    localStorage.setItem(`solved_${problem.id}`, String(nextVal));
  };

  const descriptionPlaceholder = `Given the problem constraints, implement an optimal solution algorithm. Analyze complexity limits: standard target execution is time complexity O(N) and space complexity O(1). Verify edge cases such as empty values, array limits, or duplicate inputs.`;

  return (
    <div className="space-y-4">
      
      {/* Back button and breadcrumb path */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-750 transition cursor-pointer select-none"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          DSA Arena / Problem #{problem.id}
        </span>
      </div>

      {/* Grid splits left and right panel */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Side panel: Question specs */}
        <div className="xl:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-5.5 shadow-sm flex flex-col justify-between min-h-[480px]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3.5">
              <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full border leading-none ${
                problem.difficulty === "Easy"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                  : problem.difficulty === "Medium"
                  ? "bg-amber-50 text-amber-700 border-amber-100"
                  : "bg-rose-50 text-rose-700 border-rose-100"
              }`}>
                {problem.difficulty}
              </span>
              <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200/60 leading-none">
                {problem.topic}
              </span>

              {/* Status and Favorite Badges */}
              {isSolved && (
                <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 leading-none flex items-center gap-0.5">
                  ✓ Solved
                </span>
              )}
              {isFavorite && (
                <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200 leading-none flex items-center gap-0.5">
                  ★ Favorite
                </span>
              )}
            </div>

            <div className="flex justify-between items-start gap-4">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 leading-tight">
                {problem.name}
              </h2>
              
              {/* Star Button */}
              <button
                onClick={handleToggleFavorite}
                className={`p-1.5 rounded-lg border transition active:scale-95 cursor-pointer ${
                  isFavorite 
                    ? "bg-amber-50 border-amber-200 text-amber-500" 
                    : "bg-white border-slate-200 text-slate-350 hover:text-slate-400"
                }`}
                title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              >
                <svg className="w-4.5 h-4.5" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </button>
            </div>

            {/* Description Tab Toggle */}
            <div className="flex border-b border-slate-150 mt-5 mb-3.5">
              <button
                onClick={() => setActiveTab("description")}
                className={`pb-2 px-3 font-bold text-xs sm:text-sm border-b-2 transition ${
                  activeTab === "description"
                    ? "border-blue-600 text-blue-650"
                    : "border-transparent text-slate-400 hover:text-slate-650"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("companies")}
                className={`pb-2 px-3 font-bold text-xs sm:text-sm border-b-2 transition ${
                  activeTab === "companies"
                    ? "border-blue-600 text-blue-650"
                    : "border-transparent text-slate-400 hover:text-slate-655"
                }`}
              >
                Target Companies
              </button>
            </div>

            {/* Tab content */}
            {activeTab === "description" ? (
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>{descriptionPlaceholder}</p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-mono text-xs text-slate-700 space-y-1.5">
                  <p><strong>Example constraints:</strong></p>
                  <p>Acceptance: <span className="font-semibold text-slate-600">{problem.acceptance}</span></p>
                  <p>Frequency: <span className="font-semibold text-slate-600">{problem.frequency}</span></p>
                </div>
              </div>
            ) : (
              <div className="space-y-3.5">
                <p className="text-xs text-slate-500 font-semibold">Assessment matches for this question:</p>
                <div className="flex flex-wrap gap-1.5">
                  {problem.companies.map((company, idx) => (
                    <span key={idx} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded border border-slate-200/50">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Mark Solved & Notes Block */}
          <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
            {/* Mark Solved Checkbox */}
            <div className="flex items-center gap-2 select-none">
              <input
                id="mark-solved"
                type="checkbox"
                checked={isSolved}
                onChange={handleToggleSolved}
                className="w-4.5 h-4.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
              />
              <label htmlFor="mark-solved" className="text-xs font-bold text-slate-700 cursor-pointer">
                Mark as Solved task
              </label>
            </div>

            {/* Study Notes Textarea */}
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                Study notes
              </label>
              <textarea
                value={noteText}
                onChange={(e) => handleNoteChange(e.target.value)}
                placeholder="Write your study notes or solution complexity ideas here..."
                className="w-full h-24 border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl p-3 text-xs outline-none transition focus:ring-1 focus:ring-blue-500 bg-white text-slate-800 resize-none"
              ></textarea>
            </div>

            {/* Solve Redirection */}
            <div className="flex justify-between items-center text-xs gap-3">
              <a
                href={problem.leetcodeUrl || "https://leetcode.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold px-3.5 py-2 rounded-xl transition inline-flex items-center gap-1 select-none border border-blue-100"
              >
                Solve on LeetCode
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span className="font-semibold text-slate-400 text-[10px] uppercase">Standard complexity: O(N)</span>
            </div>
          </div>
        </div>

        {/* Right Side panel: Mock Code Editor compiler */}
        <div className="xl:col-span-7 bg-slate-900 text-slate-350 border border-slate-800 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden min-h-[480px]">
          
          {/* Editor Header panel */}
          <div className="bg-slate-850 px-5 py-3 border-b border-slate-800 flex items-center justify-between select-none">
            <span className="text-xs font-bold text-slate-300 font-mono">Solution.cpp</span>
            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
              C++ Compiler
            </span>
          </div>

          {/* Editor input textarea code */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm p-5 focus:outline-none resize-none min-h-[320px]"
          ></textarea>

          {/* Compiler Actions panel */}
          <div className="bg-slate-850 px-5 py-4.5 border-t border-slate-800 flex items-center justify-between">
            <button className="bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition cursor-pointer select-none border border-slate-700">
              Run Code
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-xl transition shadow shadow-blue-500/10 cursor-pointer select-none active:scale-95">
              Submit Solution
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default DSAProblemDetails;
