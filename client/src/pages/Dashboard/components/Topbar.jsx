import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  
  // Interactive UI States
  const [searchQuery, setSearchQuery] = useState("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  // Refs for closing dropdowns on click-outside
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Search Mock Data
  const searchIndex = [
    { name: "BFS & DFS Graph Algorithms", path: "/dsa", category: "DSA" },
    { name: "DBMS Normalization Guide (1NF, 2NF, 3NF)", path: "/core-subjects", category: "Core CS" },
    { name: "Microsoft OA Test Preparation", path: "/dashboard", category: "Company" },
    { name: "Quantitative Aptitude Shortcut Methods", path: "/aptitude", category: "Aptitude" },
    { name: "System Design Scale & Load Balancers", path: "/core-subjects", category: "Core CS" }
  ];

  // Notification Mock Data
  const notifications = [
    { id: 1, text: "Daily Goals checklist updated by AI Mentor.", time: "10 mins ago" },
    { id: 2, text: "Microsoft internship online assessment in 5 days.", time: "2 hours ago" },
    { id: 3, text: "AI technical mock round scorecard is ready.", time: "Yesterday" }
  ];

  // Local filtering logic
  const filteredResults = searchQuery
    ? searchIndex.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 relative z-20">
      
      {/* Search Input Bar with dropdown filter list */}
      <div className="w-72 sm:w-96 relative">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search topics (e.g. Graph, DBMS, Microsoft)..."
          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm outline-none transition focus:ring-1 focus:ring-blue-500 text-slate-800"
        />

        {/* Local Search Dropdown Card */}
        {searchQuery && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 max-h-[260px] overflow-y-auto">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2.5 pb-2 mb-2 border-b border-slate-100">
              Filter results ({filteredResults.length})
            </div>
            {filteredResults.length > 0 ? (
              <div className="space-y-1.5">
                {filteredResults.map((result, idx) => (
                  <Link
                    key={idx}
                    to={result.path}
                    onClick={() => setSearchQuery("")}
                    className="flex justify-between items-center px-2.5 py-2 hover:bg-slate-50 rounded-xl text-xs sm:text-sm transition cursor-pointer"
                  >
                    <span className="font-semibold text-slate-700">{result.name}</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                      {result.category}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 text-center py-4">No matching preparation topics found.</p>
            )}
          </div>
        )}
      </div>

      {/* Profile Details & Notification icons */}
      <div className="flex items-center gap-4">
        
        {/* Notification bell dropdown toggle */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => {
              setIsNotificationOpen(!isNotificationOpen);
              setHasNotification(false);
            }}
            className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/60 text-slate-500 transition relative cursor-pointer active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {hasNotification && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500"></span>
            )}
          </button>

          {/* Notifications Dropdown Panel */}
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-3">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2.5 pb-2 mb-2 border-b border-slate-100 flex justify-between items-center">
                <span>Notifications</span>
                <span className="text-[8px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">New Alerts</span>
              </div>
              <div className="space-y-1.5">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="p-2.5 hover:bg-slate-50 rounded-xl text-xs transition border border-transparent hover:border-slate-100"
                  >
                    <p className="font-medium text-slate-700 leading-normal">{notif.text}</p>
                    <span className="text-[9px] text-slate-400 mt-1 block">{notif.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <span className="h-6 w-[1px] bg-slate-200 hidden sm:block"></span>

        {/* Profile Card & Settings Dropdown */}
        <div className="relative" ref={profileRef}>
          <div
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 select-none cursor-pointer hover:bg-slate-50 p-1.5 rounded-xl transition duration-200 border border-transparent hover:border-slate-100"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow shadow-blue-500/10">
              SP
            </div>
            <div className="hidden sm:block">
              <h5 className="text-xs font-bold text-slate-800 leading-tight">Somnath</h5>
              <span className="text-[9px] text-slate-400 font-medium leading-none">Grad Class of 2026</span>
            </div>
            <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${isProfileOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Profile Dropdown Panel */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 flex flex-col gap-1">
              <Link
                to="/profile"
                onClick={() => setIsProfileOpen(false)}
                className="px-4 py-2 hover:bg-slate-50 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                My Profile
              </Link>
              <Link
                to="/settings"
                onClick={() => setIsProfileOpen(false)}
                className="px-4 py-2 hover:bg-slate-50 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Settings
              </Link>
              <hr className="border-slate-100 my-1" />
              <button
                onClick={() => {
                  setIsProfileOpen(false);
                  navigate("/");
                }}
                className="w-full text-left px-4 py-2 hover:bg-rose-50 rounded-xl text-xs sm:text-sm font-semibold text-rose-600 flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                Sign Out
              </button>
            </div>
          )}
        </div>

      </div>

    </header>
  );
}

export default Topbar;
