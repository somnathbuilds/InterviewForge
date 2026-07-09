import { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What features does InterviewForge offer?",
      answer: "InterviewForge provides a comprehensive engineering placement suite: personalized coding roadmaps, structured aptitude quizzes, conceptual guide modules for core CS subjects (DBMS, OS, Computer Networks), and AI-guided mock interviews with performance diagnostics scorecards.",
    },
    {
      question: "How does the AI Mentor recommend daily goals?",
      answer: "Our AI Mentor assesses your active milestones, category completion scores, and code efficiency markers to suggest a daily checklist. This includes targeted DSA problem links, relevant concepts to revise, and quick logical reasoning tasks.",
    },
    {
      question: "Can I practice for specific tech companies?",
      answer: "Yes. Our platform compiles company-wise preparation tracks. You can practice curated coding lists, previous online assessment (OA) questions, and mock interview rounds matching hiring standards of companies like Amazon, Google, Microsoft, and others.",
    },
    {
      question: "Is the platform suitable for college students with zero prep?",
      answer: "Absolutely. The Personalised learning roadmap starts with standard programming syntax, object-oriented concepts, and basic data structures before scaling to advanced algorithms, dynamic programming, and system design topics.",
    },
    {
      question: "How does the AI Mock Interview system work?",
      answer: "The AI interviewer simulates actual technical and behavioral rounds. Once you submit code or respond to prompts, it analyses parameters like correctness, time complexity, communication clarity, and problem-solving flow to deliver a detailed readiness rating index.",
    },
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-slate-50/50 py-20 lg:py-28 border-t border-slate-100 relative overflow-hidden">
      {/* Decorative background visual blurs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-100/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-xs">
            Common Inquiries
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our platform, prep roadmaps, and mock interview setups.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer select-none"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                  <span className={`w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-blue-600 transition duration-300 ${isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[250px] opacity-100 border-t border-slate-50/50" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-5 text-slate-500 text-xs sm:text-sm leading-relaxed bg-slate-50/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQSection;
