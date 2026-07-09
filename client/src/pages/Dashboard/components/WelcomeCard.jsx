import logo from "../../../assets/images/logo.png";

function WelcomeCard() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-6 lg:p-8 overflow-hidden shadow-lg shadow-blue-600/10">
      
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl translate-x-20 -translate-y-20"></div>
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Content Column */}
        <div className="space-y-4 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs bg-white/20 text-white font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
              Dashboard Workspace
            </span>
            <span className="text-xs bg-amber-400/20 text-amber-200 font-bold px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm border border-amber-400/10">
              🔥 7 Day Streak
            </span>
            <span className="text-xs bg-emerald-400/20 text-emerald-200 font-bold px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm border border-emerald-400/10">
              🎯 82% Placement Readiness
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, Somnath 👋
            </h1>
            <p className="text-blue-100 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
              <strong>Today's Goal:</strong> Solve 2 DSA + Revise DBMS
            </p>
          </div>

          <div className="pt-2">
            <button className="bg-white hover:bg-slate-50 text-blue-600 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition duration-200 shadow-md shadow-slate-900/5 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Continue Learning
            </button>
          </div>
        </div>

        {/* Brand logo container */}
        <div className="hidden md:flex shrink-0 w-24 h-24 bg-white/10 rounded-2xl items-center justify-center border border-white/10 backdrop-blur-sm shadow-inner">
          <img src={logo} alt="InterviewForge Logo" className="h-14 w-14 brightness-110" />
        </div>

      </div>
    </div>
  );
}

export default WelcomeCard;
