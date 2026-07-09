import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./pages/Dashboard/components/DashboardLayout";
import DSADashboard from "./pages/DSA/DSADashboard";
import CompanyWise from "./pages/DSA/CompanyWise";
import DSARoadmaps from "./pages/DSA/DSARoadmaps";
import DSATopics from "./pages/DSA/DSATopics";
import DSAFavorites from "./pages/DSA/DSAFavorites";
import DSARevisionList from "./pages/DSA/DSARevisionList";
import DSASheets from "./pages/DSA/DSASheets";
import DSAProblemDetails from "./pages/DSA/DSAProblemDetails";
import DSACompanyQuestions from "./pages/DSA/DSACompanyQuestions";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  AptitudePage,
  CoreSubjectsPage,
  MockInterviewPage,
  ProfilePage,
  SettingsPage,
} from "./pages/Dashboard/Subpages";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected workspace routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          
          <Route path="/dsa" element={<ProtectedRoute><DashboardLayout><DSADashboard /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dsa/company-wise" element={<ProtectedRoute><DashboardLayout><CompanyWise /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dsa/company-wise/:companyName" element={<ProtectedRoute><DashboardLayout><DSACompanyQuestions /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dsa/roadmaps" element={<ProtectedRoute><DashboardLayout><DSARoadmaps /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dsa/topics" element={<ProtectedRoute><DashboardLayout><DSATopics /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dsa/favorites" element={<ProtectedRoute><DashboardLayout><DSAFavorites /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dsa/revision" element={<ProtectedRoute><DashboardLayout><DSARevisionList /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dsa/sheets" element={<ProtectedRoute><DashboardLayout><DSASheets /></DashboardLayout></ProtectedRoute>} />
          <Route path="/dsa/problem/:id" element={<ProtectedRoute><DashboardLayout><DSAProblemDetails /></DashboardLayout></ProtectedRoute>} />
          
          <Route path="/aptitude" element={<ProtectedRoute><DashboardLayout><AptitudePage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/core-subjects" element={<ProtectedRoute><DashboardLayout><CoreSubjectsPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/mock-interview" element={<ProtectedRoute><DashboardLayout><MockInterviewPage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><DashboardLayout><ProfilePage /></DashboardLayout></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><DashboardLayout><SettingsPage /></DashboardLayout></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;