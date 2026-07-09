import logo from "../../assets/images/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    preparation: [
      { name: "DSA Roadmap", href: "#" },
      { name: "Aptitude Training", href: "#" },
      { name: "Core CS Subjects", href: "#" },
      { name: "AI Mock Interviews", href: "#" },
    ],
    platform: [
      { name: "Features Showcase", href: "#" },
      { name: "Candidate Dashboard", href: "#" },
      { name: "AI Mentor", href: "#" },
      { name: "Student Stories", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Support Desk", href: "#" },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
        
        {/* Brand Information */}
        <div className="lg:col-span-5 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="InterviewForge Logo" className="h-9 w-9 brightness-110" />
            <h1 className="text-xl font-extrabold text-white tracking-wide">
              InterviewForge
            </h1>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
            AI-driven placement preparation workspace helping students master technical programming, computer core concepts, logical aptitude, and mock rounds systematically.
          </p>
          
          {/* Social placeholder handles */}
          <div className="flex gap-4.5 mt-2">
            {["twitter", "github", "linkedin"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition duration-300"
              >
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 bg-current rounded-sm opacity-80"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic link lists */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4.5">Preparation</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {links.preparation.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4.5">Platform</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {links.platform.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4.5">Company</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Footer copyright banner */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {currentYear} InterviewForge. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
