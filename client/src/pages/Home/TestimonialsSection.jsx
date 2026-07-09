// Helper component to render stars, declared at top level to avoid linter warnings
function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      college: "AKTU",
      testimonial: "The personalized DSA roadmap completely streamlined my practice. I went from randomly solving questions to systematically mastering topics. The code execution feedback was a game-changer!",
      avatarInitials: "RS",
      avatarColor: "from-blue-600 to-indigo-600",
    },
    {
      name: "Priya Verma",
      college: "IIIT",
      testimonial: "The mock interview rounds feel exactly like real placement drives. The detailed feedback scorecard and core computer science revision guide helped me build confidence for the actual rounds.",
      avatarInitials: "PV",
      avatarColor: "from-indigo-600 to-violet-600",
    },
    {
      name: "Aditya Singh",
      college: "NIT",
      testimonial: "Managing DSA preparation, aptitude, and core subjects all at once was tough. InterviewForge structured everything into a single, cohesive dashboard that kept me organized and on track daily.",
      avatarInitials: "AS",
      avatarColor: "from-blue-500 to-sky-500",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-slate-100 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-slate-50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-blue-50/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-xs">
            Student Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
            Trusted by Future Software Engineers
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Students preparing with InterviewForge feel more confident and organized.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <StarRating />
                <p className="text-slate-600 text-sm leading-relaxed mt-5 italic">
                  "{t.testimonial}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-4.5 mt-8 pt-6 border-t border-slate-50">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0`}>
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition">
                    {t.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">
                    {t.college}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Testimonial Footer Banner */}
        <div className="text-center mt-20 max-w-xl mx-auto flex flex-col items-center gap-3">
          <StarRating />
          <p className="text-lg font-bold text-slate-800 mt-2 leading-relaxed">
            "Thousands of students are preparing smarter with InterviewForge."
          </p>
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
