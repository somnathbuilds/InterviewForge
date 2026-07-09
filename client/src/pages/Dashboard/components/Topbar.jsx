function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0">
      
      {/* Search Input Bar */}
      <div className="w-72 sm:w-96 relative">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search roadmaps, DSA sheets, mocks..."
          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm outline-none transition focus:ring-1 focus:ring-blue-500 text-slate-800"
        />
      </div>

      {/* Profile Details & Notification icons */}
      <div className="flex items-center gap-4">
        
        {/* Notification bell */}
        <button
          className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/60 text-slate-500 transition relative cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500"></span>
        </button>

        {/* Divider */}
        <span className="h-6 w-[1px] bg-slate-200 hidden sm:block"></span>

        {/* User Card */}
        <div className="flex items-center gap-3 select-none">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow shadow-blue-500/10">
            RS
          </div>
          <div className="hidden sm:block">
            <h5 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">Rohan Sharma</h5>
            <span className="text-[10px] text-slate-400 font-medium leading-none">Placement Batch 2026</span>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Topbar;
