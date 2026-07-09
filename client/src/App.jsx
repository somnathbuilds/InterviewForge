import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./pages/Dashboard/components/DashboardLayout";
import DSA from "./pages/DSA/DSA";
import {
  AptitudePage,
  CoreSubjectsPage,
  MockInterviewPage,
  ProfilePage,
  SettingsPage,
} from "./pages/Dashboard/Subpages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Dashboard Subpages */}
        <Route path="/dsa" element={<DashboardLayout><DSA /></DashboardLayout>} />
        <Route path="/aptitude" element={<DashboardLayout><AptitudePage /></DashboardLayout>} />
        <Route path="/core-subjects" element={<DashboardLayout><CoreSubjectsPage /></DashboardLayout>} />
        <Route path="/mock-interview" element={<DashboardLayout><MockInterviewPage /></DashboardLayout>} />
        <Route path="/profile" element={<DashboardLayout><ProfilePage /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><SettingsPage /></DashboardLayout>} />
      </Routes>
    </Router>
  );
}

export default App;