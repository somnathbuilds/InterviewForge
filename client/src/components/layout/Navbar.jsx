import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 border-b border-gray-200 bg-white shadow-sm">

      {/* Left Section */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="InterviewForge Logo"
          className="h-10 w-10"
        />
        <h1 className="text-2xl font-bold text-blue-600">
          InterviewForge
        </h1>
      </div>

      {/* Center Section */}
      <ul className="flex items-center gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-blue-600 transition">
          DSA
        </li>

        <li className="cursor-pointer hover:text-blue-600 transition">
          Aptitude
        </li>

        <li className="cursor-pointer hover:text-blue-600 transition">
          Core Subjects
        </li>

        <li className="cursor-pointer hover:text-blue-600 transition">
          Mock Interview
        </li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        <button className="px-5 py-2 text-blue-600 font-medium hover:text-blue-700">
          Login
        </button>

        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Register
        </button>

      </div>

    </nav>
  );
}

export default Navbar;