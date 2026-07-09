function WhyInterviewForge() {
  const features = [
    {
      title: "DSA Preparation",
      description: "Master algorithms and complex data structures with curated problem sheets, interactive visualizers, and questions asked by top-tier tech companies.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Aptitude Training",
      description: "Enhance your logical, quantitative, and verbal reasoning skills. Tackle assessment rounds with ease using mock tests and shortcut guide sheets.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      title: "Core CS Subjects",
      description: "Excel in core concepts like Database Management (DBMS), Operating Systems (OS), Computer Networks (CN), and System Design fundamentals.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      bgColor: "bg-violet-50",
      textColor: "text-violet-600",
    },
    {
      title: "AI Mock Interviews",
      description: "Gain confidence by simulating realistic company rounds with our AI interviewer. Receive detailed scoring grids and expert behavioral analysis.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: "bg-sky-50",
      textColor: "text-sky-600",
    },
  ];

  return (
    <section className="relative bg-slate-50/50 py-20 lg:py-28 border-t border-slate-100 overflow-hidden">
      {/* Decorative background grids/glowing elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-tr from-blue-100/10 to-indigo-100/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-xs">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
            Why InterviewForge?
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            We offer a comprehensive preparation suite to master core computer science rounds, practical programming, logical tests, and real-life interview scenarios.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} ${feature.textColor} flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyInterviewForge;
