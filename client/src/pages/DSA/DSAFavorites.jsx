import { useProgress } from "../../context/ProgressContext";
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

function DSAFavorites() {
  const { favoriteIds, toggleFavorite } = useProgress();

  // Filter compiled problems list to only include favorited items
  const problems = compiledProblemsList.filter((p) => favoriteIds.includes(p.id));

  const handleRemoveFavorite = (prob) => {
    toggleFavorite(prob, false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
          Bookmarks
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-3">
          Bookmarked Questions
        </h1>
        <p className="text-slate-550 text-xs sm:text-sm">
          A list of your favorite starred and flagged DSA problems for quick revision.
        </p>
      </div>

      {/* Favorites Table */}
      <div className="bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
        {problems.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Problem Name</th>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Difficulty</th>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Topic</th>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company Tags</th>
                  <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/80">
                {problems.map((prob) => (
                  <tr key={prob.id} className="hover:bg-slate-50/50 transition">
                    <td className="px-6 py-4.5">
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                        {prob.name}
                      </span>
                    </td>
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
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                        {prob.topic}
                      </span>
                    </td>
                    <td className="px-6 py-4.5">
                      <div className="flex flex-wrap gap-1.5 max-w-xs">
                        {prob.companies.slice(0, 5).map((company, cidx) => (
                          <span key={cidx} className="text-[9px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                            {company}
                          </span>
                        ))}
                        {prob.companies.length > 5 && (
                          <span className="text-[9px] font-semibold text-slate-400 px-0.5 self-center">
                            +{prob.companies.length - 5}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4.5 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <Link
                          to={`/dsa/problem/${prob.id}`}
                          className="text-[11px] bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-lg transition inline-block select-none active:scale-95 shadow-sm hover:shadow"
                        >
                          View Details
                        </Link>
                        <button
                          onClick={() => handleRemoveFavorite(prob)}
                          className="text-rose-600 hover:text-rose-700 text-xs font-bold transition cursor-pointer select-none"
                        >
                          Remove Star
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 text-center text-slate-400">
            <svg className="w-12 h-12 text-slate-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <h4 className="text-sm font-bold text-slate-650">No favorite questions bookmarked yet.</h4>
            <p className="text-xs text-slate-400 mt-1">Star questions inside the DSA Dashboard to list them here.</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default DSAFavorites;
