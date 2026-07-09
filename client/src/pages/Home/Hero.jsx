function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* Left Side */}
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">

          <p className="text-blue-600 font-semibold mb-4 tracking-wide uppercase text-sm">
            AI-Powered Placement Platform
          </p>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Maximize Your <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Placement Potential
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Master DSA, Aptitude, Core Subjects, and Mock Interviews
            through personalized roadmaps, AI-powered guidance,
            revision planning, and company-wise preparation.
          </p>

          <div className="mt-10 flex gap-4 w-full sm:w-auto">

            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 active:scale-95 transition-all duration-200 cursor-pointer">
              Start Preparing
            </button>

            <button className="w-full sm:w-auto border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 px-8 py-3.5 rounded-xl font-semibold active:scale-95 transition-all duration-200 cursor-pointer">
              Explore Roadmap
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="w-full max-w-[580px] lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative w-full bg-slate-900/5 rounded-3xl p-3 ring-1 ring-slate-900/10 backdrop-blur-sm shadow-xl">
            <div className="relative bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">
              {/* Browser Window Controls */}
              <div className="h-10 border-b border-slate-100 bg-slate-50/50 px-4 flex items-center gap-2 shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-400"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-amber-400"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-400"></span>
                <div className="mx-auto w-1/2 h-5 rounded bg-slate-100 text-[10px] text-slate-400 flex items-center justify-center font-mono">
                  interviewforge.com/dashboard
                </div>
              </div>
              
              {/* Mockup Dashboard Content */}
              <div className="flex-1 flex bg-slate-50/50">
                {/* Dashboard Mini Sidebar */}
                <div className="w-14 border-r border-slate-100 bg-white flex flex-col items-center py-4 gap-4 shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">IF</div>
                  <div className="w-6 h-6 rounded-md bg-slate-100"></div>
                  <div className="w-6 h-6 rounded-md bg-slate-100"></div>
                  <div className="w-6 h-6 rounded-md bg-slate-100"></div>
                  <div className="w-6 h-6 rounded-md bg-slate-100"></div>
                </div>
                
                {/* Dashboard Main Panel */}
                <div className="flex-1 p-5 overflow-hidden flex flex-col gap-4">
                  {/* Header Row */}
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Candidate Dashboard</div>
                      <h3 className="text-sm font-bold text-slate-800">Welcome back, Rohan!</h3>
                    </div>
                    <span className="text-[10px] font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100">
                      Ready for Prep
                    </span>
                  </div>
                  
                  {/* Cards Row */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* DSA Card */}
                    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-medium text-slate-500">DSA Prep</span>
                        <span className="text-xs font-bold text-blue-600">74%</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '74%' }}></div>
                      </div>
                      <span className="text-[9px] text-slate-400 mt-2">148 / 200 Solved</span>
                    </div>
                    
                    {/* Mock Interview Card */}
                    <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-medium text-slate-500">Mock Rating</span>
                        <span className="text-xs font-bold text-indigo-600">Exceeded</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-[9px] text-slate-400 mt-2">4 scheduled interviews</span>
                    </div>
                  </div>
                  
                  {/* Performance / Active Tasks section */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm flex-1 flex flex-col justify-between min-h-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold text-slate-700">Preparation Progress</span>
                      <span className="text-[9px] text-slate-400">Weekly Activity</span>
                    </div>
                    
                    {/* Mock SVG Graph */}
                    <div className="flex-1 flex items-end gap-1.5 h-16 pt-2">
                      <div className="flex-1 bg-blue-50 hover:bg-blue-100 transition rounded-t-sm h-[30%]"></div>
                      <div className="flex-1 bg-blue-100 hover:bg-blue-200 transition rounded-t-sm h-[50%]"></div>
                      <div className="flex-1 bg-blue-200 hover:bg-blue-300 transition rounded-t-sm h-[40%]"></div>
                      <div className="flex-1 bg-blue-400 hover:bg-blue-500 transition rounded-t-sm h-[75%]"></div>
                      <div className="flex-1 bg-blue-600 hover:bg-blue-700 transition rounded-t-sm h-[90%]"></div>
                      <div className="flex-1 bg-indigo-500 hover:bg-indigo-600 transition rounded-t-sm h-[65%]"></div>
                      <div className="flex-1 bg-indigo-600 hover:bg-indigo-700 transition rounded-t-sm h-[100%]"></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-[8px] text-slate-400 mt-2 pt-1 border-t border-slate-50">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative glowing elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;