import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex overflow-hidden">
      
      {/* Left Branding Column (Hidden on mobile/tablet) */}
      <div className="hidden lg:flex lg:w-[45%] bg-slate-900 text-slate-100 flex-col justify-between p-12 relative overflow-hidden">
        {/* Background glow filters */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Brand Header */}
        <Link to="/" className="flex items-center gap-3 relative z-10 shrink-0">
          <img src={logo} alt="InterviewForge Logo" className="h-9 w-9 brightness-110" />
          <h2 className="text-xl font-extrabold text-white tracking-wide">
            InterviewForge
          </h2>
        </Link>

        {/* Central visual text / illustration wrapper */}
        <div className="relative z-10 my-auto max-w-md">
          <h1 className="text-4xl font-extrabold leading-tight text-white tracking-tight mb-6">
            Unlock Your <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Placement Potential
            </span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Access your personalized learning roadmap, study DSA, review core subjects, and practice with our AI Mentor to secure your target offer.
          </p>

          {/* Quick list of features */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">AI Placement Roadmap Generator</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">Real-Time Core Subject diagnostics</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200">Interactive Simulated AI Mock rounds</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="relative z-10 text-xs text-slate-500">
          © {new Date().getFullYear()} InterviewForge. All rights reserved.
        </div>
      </div>

      {/* Right Login Column */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 bg-white relative">
        {/* Back to Home Link (Mobile top layout) */}
        <div className="absolute top-6 right-6">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-[420px] flex flex-col justify-center">
          
          {/* Header */}
          <div className="mb-8">
            <div className="flex lg:hidden items-center gap-2 mb-6">
              <img src={logo} alt="InterviewForge Logo" className="h-8 w-8" />
              <span className="text-lg font-bold text-slate-800">InterviewForge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Welcome back
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              Enter your details below to access your workspace.
            </p>
          </div>

          {/* Social Sign In Options */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 rounded-xl py-2.5 px-4 text-xs font-bold text-slate-700 bg-white transition hover:bg-slate-50 active:scale-98 cursor-pointer">
              <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.24 10.285V13.4h6.887c-.648 2.41-2.519 4.19-5.136 4.19A5.857 5.857 0 018.13 11.73a5.857 5.857 0 015.86-5.857c1.62 0 3.096.65 4.19 1.71l2.4-2.4A9.878 9.878 0 0013.99 2A9.99 9.99 0 004 12a9.99 9.99 0 009.99 10c5.518 0 9.99-4.472 9.99-10 0-.67-.07-1.3-.2-1.92H12.24z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-300 rounded-xl py-2.5 px-4 text-xs font-bold text-slate-700 bg-white transition hover:bg-slate-50 active:scale-98 cursor-pointer">
              <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </button>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-3 mb-6 select-none">
            <span className="flex-1 h-[1px] bg-slate-100"></span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">or continue with email</span>
            <span className="flex-1 h-[1px] bg-slate-100"></span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rohan@example.com"
                className="w-full border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl px-4 py-2.5 text-sm outline-none transition focus:ring-1 focus:ring-blue-500 bg-white text-slate-800"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="password" className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition">
                  Forgot Password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-slate-200 hover:border-slate-300 focus:border-blue-500 rounded-xl px-4 py-2.5 text-sm outline-none transition focus:ring-1 focus:ring-blue-500 bg-white text-slate-800"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 select-none py-1">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="remember" className="text-xs text-slate-500 font-medium cursor-pointer">
                Keep me logged in for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 px-4 text-sm font-semibold shadow-md shadow-blue-600/10 hover:shadow-blue-600/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Signing In...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </form>

          {/* Footer Navigation */}
          <p className="text-xs text-slate-500 text-center mt-8">
            Don't have an account?{" "}
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-700 transition">
              Create an account
            </a>
          </p>

        </div>
      </div>

    </main>
  );
}

export default Login;
