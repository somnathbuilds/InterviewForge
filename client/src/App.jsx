import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./pages/Dashboard/components/DashboardLayout";
import DSADashboard from "./pages/DSA/DSADashboard";
import DSACompanyWise from "./pages/DSA/DSACompanyWise";
import DSARoadmaps from "./pages/DSA/DSARoadmaps";
import DSATopics from "./pages/DSA/DSATopics";
import DSAFavorites from "./pages/DSA/DSAFavorites";
import DSARevisionList from "./pages/DSA/DSARevisionList";
import DSASheets from "./pages/DSA/DSASheets";
import DSAProblemDetails from "./pages/DSA/DSAProblemDetails";
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
        
        {/* DSA Subpages nested routing */}
        <Route path="/dsa" element={<DashboardLayout><DSADashboard /></DashboardLayout>} />
        <Route path="/dsa/companies" element={<DashboardLayout><DSACompanyWise /></DashboardLayout>} />
        <Route path="/dsa/roadmaps" element={<DashboardLayout><DSARoadmaps /></DashboardLayout>} />
        <Route path="/dsa/topics" element={<DashboardLayout><DSATopics /></DashboardLayout>} />
        <Route path="/dsa/favorites" element={<DashboardLayout><DSAFavorites /></DashboardLayout>} />
        <Route path="/dsa/revision" element={<DashboardLayout><DSARevisionList /></DashboardLayout>} />
        <Route path="/dsa/sheets" element={<DashboardLayout><DSASheets /></DashboardLayout>} />
        <Route path="/dsa/problem/:id" element={<DashboardLayout><DSAProblemDetails /></DashboardLayout>} />
        
        {/* Dashboard Subpages */}
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