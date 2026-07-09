import { useState } from "react";

function RoadmapSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to stage 2: "Practice DSA"

  const milestones = [
    {
      title: "Learn Fundamentals",
      description: "Master coding languages, OOPs, DBMS, Operating Systems, and computer networks concepts.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Practice DSA",
      description: "Solve topic-wise problem lists spanning arrays, strings, trees, and advanced dynamic programming.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Mock Interviews",
      description: "Tackle realistic simulated rounds with AI-led feedback panels, behavioral scorecards, and analysis.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Placement Ready",
      description: "Build a resume, analyze company referral sheets, and direct-apply to standard openings.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-slate-100 relative overflow-hidden">
      {/* Decorative subtle visual elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-xs">
            Placement Prep Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
            Your Personalized Learning Roadmap
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            A step-by-step placement journey tailored to every student.
          </p>
        </div>

        {/* Roadmap Steps Wrapper */}
        <div className="relative mt-20 max-w-6xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[3px] bg-slate-100 -z-10 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 rounded-full"
              style={{ width: `${(activeIndex / (milestones.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Connector Line (Mobile) */}
          <div className="md:hidden absolute top-[30px] bottom-[30px] left-[34px] w-[3px] bg-slate-100 -z-10 rounded-full">
            <div
              className="w-full bg-gradient-to-b from-blue-600 to-indigo-600 transition-all duration-500 rounded-full"
              style={{ height: `${(activeIndex / (milestones.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Milestones Layout */}
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
            {milestones.map((milestone, idx) => {
              const isCompleted = idx < activeIndex;
              const isActive = idx === activeIndex;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`group flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-6 p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex-1 bg-white select-none ${
                    isActive
                      ? "border-blue-500 shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/20"
                      : isCompleted
                      ? "border-slate-200 shadow-sm"
                      : "border-slate-100 shadow-sm"
                  } hover:-translate-y-1`}
                >
                  {/* Step Indicator Pin / Icon */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-md transition duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white scale-110 shadow-blue-600/30"
                        : isCompleted
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      milestone.icon
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col md:items-center">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        isActive
                          ? "text-blue-600"
                          : isCompleted
                          ? "text-indigo-600"
                          : "text-slate-400"
                      }`}
                    >
                      Stage 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mt-1 mb-2 group-hover:text-blue-600 transition duration-200">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center gap-2">
            <span>Build My Roadmap</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default RoadmapSection;
