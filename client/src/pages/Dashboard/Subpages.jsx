// Reusable subpage header
function SubpageHeader({ category, title, description }) {
  return (
    <div className="mb-8">
      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
        {category}
      </span>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mt-4">
        {title}
      </h1>
      <p className="text-slate-500 text-xs sm:text-sm mt-1">
        {description}
      </p>
    </div>
  );
}

// Reusable subpage card placeholder
function SubpagePlaceholder({ title, message, icon }) {
  return (
    <div className="border-2 border-dashed border-slate-200 rounded-3xl p-10 flex flex-col items-center justify-center text-center bg-white/50 min-h-[300px]">
      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 shadow-sm shrink-0">
        {icon}
      </div>
      <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-1.5">{title}</h3>
      <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
        {message}
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition duration-200 mt-6 shadow-md shadow-blue-600/10 active:scale-95 cursor-pointer">
        Open Workspace
      </button>
    </div>
  );
}

export function DSAPage() {
  return (
    <div>
      <SubpageHeader
        category="DSA Arena"
        title="Data Structures & Algorithms"
        description="Solve topic-wise problem sheets, practice dynamic programming, and run execution tests."
      />
      <SubpagePlaceholder
        title="DSA Coding Panel"
        message="Your coding environment and compiled list of 450 DSA problems are loading. Master arrays, strings, and trees next."
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        }
      />
    </div>
  );
}

export function AptitudePage() {
  return (
    <div>
      <SubpageHeader
        category="Logic Center"
        title="Aptitude & Reasoning"
        description="Master quantitative assessments, logical reasoning, and verbal tests."
      />
      <SubpagePlaceholder
        title="Aptitude Practice"
        message="Access previous company assessment quizzes and test shortcut methods. 62% modules completed."
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        }
      />
    </div>
  );
}

export function CoreSubjectsPage() {
  return (
    <div>
      <SubpageHeader
        category="CS Core"
        title="Core Computer Science Subjects"
        description="Revise Database Management Systems, Operating Systems, Computer Networks, and System Design."
      />
      <SubpagePlaceholder
        title="Subject Revision Guides"
        message="Review DBMS, OS, and CN cheat sheets. 4 of 6 subjects completed. System Design is next."
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        }
      />
    </div>
  );
}

export function MockInterviewPage() {
  return (
    <div>
      <SubpageHeader
        category="Interview Arena"
        title="AI Simulated Mock Interviews"
        description="Practice under realistic corporate environments with simulated video/chat sessions."
      />
      <SubpagePlaceholder
        title="Schedule Live Mock"
        message="Review your previous 8 completed mock diagnostics reports. Your next session is scheduled with Amazon."
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        }
      />
    </div>
  );
}

export function ProfilePage() {
  return (
    <div>
      <SubpageHeader
        category="User Profile"
        title="Somnath's Candidate Account"
        description="Manage your college parameters, target graduation parameters, and target companies list."
      />
      <SubpagePlaceholder
        title="Profile Settings Dashboard"
        message="Batch year: 2026. Target companies: Microsoft, Google, Amazon. Target roles: Software Engineer / Associate."
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        }
      />
    </div>
  );
}

export function SettingsPage() {
  return (
    <div>
      <SubpageHeader
        category="System Config"
        title="Platform & Notification Settings"
        description="Configure study alerts, mock schedule updates, and system visual defaults."
      />
      <SubpagePlaceholder
        title="System Settings Panel"
        message="Configure daily recommendation push-logs, sound alerts, email summaries, and mock reminders."
        icon={
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
      />
    </div>
  );
}
