import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = {
    DSA: [
      "Arrays",
      "Strings",
      "Linked List",
      "Stack & Queue",
      "Trees",
      "Graph",
      "Dynamic Programming",
      "LeetCode 75",
      "Blind 75",
    ],
    Aptitude: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "Verbal Ability",
      "Data Interpretation",
    ],
    "Core Subjects": [
      "DBMS",
      "Operating System",
      "Computer Networks",
      "OOP",
      "System Design",
    ],
    "Mock Interview": [
      "HR Interview",
      "Technical Interview",
      "AI Interview",
      "Company-wise Interviews",
    ],
  };

  const toggleMobileSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left Section / Brand Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="InterviewForge Logo" className="h-9 w-9 sm:h-10 sm:w-10" />
          <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
            InterviewForge
          </h1>
        </Link>

        {/* Center Section / Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-slate-700 font-medium h-full">
          {Object.entries(menuItems).map(([menuName, subItems]) => (
            <li key={menuName} className="relative group py-6 h-full flex items-center">
              <button className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition font-semibold text-sm sm:text-base outline-none">
                {menuName}
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-blue-600" />
              </button>
              
              {/* Dropdown Menu Container */}
              <div className="absolute top-[90%] left-1/2 -translate-x-1/2 mt-1 w-52 bg-white border border-slate-200/80 rounded-2xl shadow-xl py-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1.5 group-hover:translate-y-0 z-50">
                {subItems.map((sub, idx) => (
                  <Link
                    key={idx}
                    to={menuName === "DSA" ? "/dsa" : "/dashboard"}
                    className="block px-4 py-2 hover:bg-slate-50 text-xs sm:text-sm text-slate-600 hover:text-blue-600 font-medium transition"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* Right Section / CTA Buttons & Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          
          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className="px-5 py-2 text-blue-600 font-bold text-sm sm:text-base hover:text-blue-700 transition">
              Login
            </Link>
            <Link to="/register" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm sm:text-base transition shadow-sm shadow-blue-500/10 active:scale-95">
              Register
            </Link>
          </div>

          {/* Hamburger Trigger button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/60 text-slate-600 transition cursor-pointer select-none active:scale-95"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Sidebar overlay */}
      {isMobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-4 shadow-inner space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <ul className="space-y-2">
            {Object.entries(menuItems).map(([menuName, subItems]) => {
              const isSubmenuOpen = activeSubmenu === menuName;
              return (
                <li key={menuName} className="border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                  <button
                    onClick={() => toggleMobileSubmenu(menuName)}
                    className="w-full flex justify-between items-center py-2 text-left font-bold text-slate-700 hover:text-blue-600 transition outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{menuName}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isSubmenuOpen ? "rotate-180 text-blue-600" : ""
                    }`} />
                  </button>
                  
                  {/* Mobile Submenu links */}
                  {isSubmenuOpen && (
                    <div className="mt-1 ml-4 pl-3.5 border-l border-slate-150 py-1 space-y-2 flex flex-col">
                      {subItems.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={menuName === "DSA" ? "/dsa" : "/dashboard"}
                          onClick={() => setIsMobileOpen(false)}
                          className="text-xs sm:text-sm text-slate-500 hover:text-blue-600 font-medium py-1 transition"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Action buttons inside mobile list */}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={() => setIsMobileOpen(false)}
              className="w-full py-2.5 rounded-xl border border-slate-200 font-bold text-center text-sm text-slate-700 bg-slate-50 hover:bg-slate-100 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setIsMobileOpen(false)}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-center text-sm text-white transition shadow-sm shadow-blue-500/10"
            >
              Register
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;