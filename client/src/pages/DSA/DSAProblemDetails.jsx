import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { dsaProblems } from "../../data/dsaData";

function DSAProblemDetails() {
  const { id } = useParams();
  
  // Find problem or default to first
  const problemId = parseInt(id) || 1;
  const problem = dsaProblems.find((p) => p.id === problemId) || dsaProblems[0];

  const [code, setCode] = useState(
    `class Solution {\npublic:\n    vector<int> solveProblem(vector<int>& nums) {\n        // Write your solution logic here\n        return {};\n    }\n};`
  );
  
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="flex flex-col gap-6">
      
      {/* Back button and breadcrumb path */}
      <div className="flex items-center justify-between">
        <Link to="/dsa" className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          DSA Arena / Problem #{problem.id}
        </span>
      </div>

      {/* Grid splits left and right panel */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side panel: Question specs */}
        <div className="xl:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[460px]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border leading-none ${
                problem.difficulty === "Easy"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                  : problem.difficulty === "Medium"
                  ? "bg-amber-50 text-amber-700 border-amber-100"
                  : "bg-rose-50 text-rose-700 border-rose-100"
              }`}>
                {problem.difficulty}
              </span>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200/60 leading-none">
                {problem.topic}
              </span>
            </div>

            <h2 className="text-xl font-extrabold text-slate-800 leading-tight">
              {problem.name}
            </h2>

            {/* Description Tab Toggle */}
            <div className="flex border-b border-slate-150 mt-6 mb-4">
              <button
                onClick={() => setActiveTab("description")}
                className={`pb-2.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition ${
                  activeTab === "description"
                    ? "border-blue-600 text-blue-650"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("companies")}
                className={`pb-2.5 px-4 font-bold text-xs sm:text-sm border-b-2 transition ${
                  activeTab === "companies"
                    ? "border-blue-600 text-blue-650"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Target Companies
              </button>
            </div>

            {/* Tab content */}
            {activeTab === "description" ? (
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Given an array/list of integers and a target criteria, calculate parameters that return indices or coordinates satisfying logic requirements.
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-mono text-xs text-slate-700 space-y-2">
                  <p><strong>Example 1:</strong></p>
                  <p>Input: array = [2, 7, 11, 15], target = 9</p>
                  <p>Output: [0, 1]</p>
                  <p>Explanation: Because array[0] + array[1] == 9, we return [0, 1].</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-slate-500">Corporate assessment frequencies for this question:</p>
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  {problem.companies.map((company, idx) => (
                    <span key={idx} className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200/50">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-405">
            <span>Solved state: {problem.solved ? "Complete ✓" : "Pending"}</span>
            <span className="font-semibold text-blue-600">Standard time complexity: O(N)</span>
          </div>
        </div>

        {/* Right Side panel: Mock Code Editor compiler */}
        <div className="xl:col-span-7 bg-slate-900 text-slate-350 border border-slate-800 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden min-h-[460px]">
          
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
            className="flex-1 bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm p-5 focus:outline-none resize-none min-h-[300px]"
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
