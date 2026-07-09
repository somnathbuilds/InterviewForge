import { useState } from "react";

function AIMentorSection() {
  const [activeTask, setActiveTask] = useState(null);

  const mockTasks = [
    { id: 1, name: "Solve 2 Binary Search problems", status: "pending" },
    { id: 2, name: "Revise DBMS Transactions", status: "pending" },
    { id: 3, name: "Take 1 Aptitude Quiz", status: "pending" },
  ];

  return (
    <section className="bg-slate-50/50 py-20 lg:py-28 border-t border-slate-100 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-xs">
            AI Assistant
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
            Meet Your AI Mentor
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Get personalized guidance, instant feedback, and daily recommendations throughout your placement journey.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
          
          {/* Left Side: Chat Conversation Mockup */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="w-full bg-slate-900 text-slate-100 rounded-3xl p-5 shadow-2xl border border-slate-800 flex flex-col justify-between min-h-[460px] h-full">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold leading-tight">AI Mentor</h4>
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Active Now
                    </span>
                  </div>
                </div>
                <div className="text-[10px] bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700/60 font-semibold uppercase tracking-wider">
                  Placement Assistant
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 py-6 flex flex-col gap-4 overflow-y-auto max-h-[320px] scrollbar-thin">
                
                {/* Student message */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-blue-600 text-white rounded-2xl px-4 py-3 text-xs sm:text-sm font-medium shadow-md">
                    What should I study today?
                  </div>
                </div>

                {/* AI Mentor response */}
                <div className="flex justify-start">
                  <div className="max-w-[90%] bg-slate-800 text-slate-100 rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-medium shadow-md flex flex-col gap-3">
                    <p className="leading-relaxed text-slate-200">
                      Hello Somnath! Based on your target match-rates today, you should focus on Binary Search, Transactions, and Aptitude.
                    </p>
                    
                    {/* Actionable items inside bubble */}
                    <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800 space-y-2 mt-1">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Today's Goals</p>
                        <span className="text-[9px] bg-blue-600/20 text-blue-400 px-1.5 py-0.5 rounded font-semibold">Est: 2h 30m</span>
                      </div>
                      {mockTasks.map((task) => (
                        <div key={task.id} className="flex items-start gap-2.5">
                          <input
                            type="checkbox"
                            checked={activeTask === task.id}
                            onChange={() => setActiveTask(activeTask === task.id ? null : task.id)}
                            className="mt-0.5 w-3.5 h-3.5 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500 cursor-pointer"
                          />
                          <span className={`text-xs ${activeTask === task.id ? "line-through text-slate-500" : "text-slate-300"}`}>
                            {task.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Mock Chat Input Footer */}
              <div className="pt-4 border-t border-slate-800 flex gap-2">
                <input
                  type="text"
                  placeholder="Ask your AI Mentor..."
                  disabled
                  className="flex-1 bg-slate-800 border border-slate-700/60 rounded-xl px-4 py-2 text-xs text-slate-400 select-none outline-none"
                />
                <button disabled className="bg-blue-600 text-white p-2 rounded-xl opacity-60">
                  <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

          {/* Right Side: AI Assistant Card */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="w-full bg-white border border-slate-100 rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[460px] h-full">
              
              {/* Header section inside card */}
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
                  AI INSIGHT PANEL
                </span>
                <h3 className="text-xl font-bold text-slate-800 mt-4">AI Mentor Readiness Score</h3>
                <p className="text-slate-500 text-xs mt-1">Real-time interview assessment indices</p>
              </div>

              {/* Progress gauge */}
              <div className="my-6 flex items-center justify-around gap-6 bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                <div className="relative flex items-center justify-center">
                  {/* Circular SVG Progress */}
                  <svg className="w-28 h-28 transform -rotate-90">
                    <circle cx="56" cy="56" r="48" stroke="#e2e8f0" strokeWidth="8" fill="transparent" />
                    <circle cx="56" cy="56" r="48" stroke="#2563eb" strokeWidth="8" fill="transparent" strokeDasharray={301.6} strokeDashoffset={301.6 * (1 - 0.82)} strokeLinecap="round" />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-2xl font-extrabold text-slate-800">82%</span>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Placement Score</p>
                  </div>
                </div>

                <div className="space-y-3 flex-1 max-w-[200px]">
                  <div>
                    <div className="flex justify-between text-[10px] font-semibold text-slate-600 mb-1">
                      <span>Problem Solving Grade</span>
                      <span className="text-blue-600 font-bold">A+</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-semibold text-slate-600 mb-1">
                      <span>Core CS Topics</span>
                      <span className="text-indigo-600 font-bold">B</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bullet insights */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-xs font-bold">⚡</span>
                  <div>
                    <h5 className="text-xs font-bold text-slate-700">Code Diagnostics</h5>
                    <p className="text-[10px] text-slate-500 mt-0.5">Analyses time complexity and memory parameters instantly on code submission.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 text-xs font-bold">📈</span>
                  <div>
                    <h5 className="text-xs font-bold text-slate-700">Predictive Match Rate</h5>
                    <p className="text-[10px] text-slate-500 mt-0.5">Calculates score fits against specific job parameters in top-tier tech firms.</p>
                  </div>
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                <span>Last evaluated: Today, 1:40 AM</span>
                <span className="flex items-center gap-1 font-semibold text-blue-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping"></span>
                  Refreshed
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center gap-2">
            <span>Chat with AI Mentor</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default AIMentorSection;
