/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";

const ProgressContext = createContext(null);

export const ProgressProvider = ({ children }) => {
  const { user } = useAuth();
  const [solvedIds, setSolvedIds] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [notes, setNotes] = useState({});
  const [dashboardStats, setDashboardStats] = useState({
    totalSolved: 0,
    totalFavorites: 0,
    progressPercentage: 82,
    currentStreak: 7,
    recentlySolved: []
  });
  const [loading, setLoading] = useState(true);

  // Fetch progress and questions data whenever the authenticated user state changes
  useEffect(() => {
    const fetchProgressData = async () => {
      const token = localStorage.getItem("token");
      if (!user || !token) {
        setSolvedIds([]);
        setFavoriteIds([]);
        setNotes({});
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        // 1. Fetch questions logs
        const questionsRes = await fetch("http://localhost:5000/api/progress/questions", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const questionsData = await questionsRes.json();

        if (questionsData.success) {
          setSolvedIds(questionsData.solved || []);
          setFavoriteIds(questionsData.favorites || []);
          setNotes(questionsData.notes || {});
        }

        // 2. Fetch dashboard summary stats
        const statsRes = await fetch("http://localhost:5000/api/progress", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const statsData = await statsRes.json();

        if (statsData.success) {
          setDashboardStats({
            totalSolved: statsData.totalSolved,
            totalFavorites: statsData.totalFavorites,
            progressPercentage: statsData.progressPercentage,
            currentStreak: statsData.currentStreak,
            recentlySolved: statsData.recentlySolved || []
          });
        }
      } catch (error) {
        console.error("Failed to load user progress:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgressData();
  }, [user]);

  // Refresh progress stats for dashboard
  const refreshStats = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const statsRes = await fetch("http://localhost:5000/api/progress", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const statsData = await statsRes.json();

      if (statsData.success) {
        setDashboardStats({
          totalSolved: statsData.totalSolved,
          totalFavorites: statsData.totalFavorites,
          progressPercentage: statsData.progressPercentage,
          currentStreak: statsData.currentStreak,
          recentlySolved: statsData.recentlySolved || []
        });
      }
    } catch (error) {
      console.error("Failed to refresh progress stats:", error);
    }
  };

  const toggleSolved = async (problem, solvedStatus) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    // Optimistic state updates
    if (solvedStatus) {
      setSolvedIds((prev) => [...prev, problem.id]);
    } else {
      setSolvedIds((prev) => prev.filter((id) => id !== problem.id));
    }

    try {
      const res = await fetch("http://localhost:5000/api/progress/solved", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          problemId: problem.id,
          problemName: problem.name || problem.title,
          leetcodeUrl: problem.leetcodeUrl,
          difficulty: problem.difficulty,
          topic: problem.topic,
          company: problem.companies?.[0] || "General",
          companies: problem.companies || ["General"],
          solved: solvedStatus
        })
      });
      const data = await res.json();
      if (data.success) {
        refreshStats();
      }
    } catch (error) {
      console.error("Failed to toggle solved status:", error);
    }
  };

  const toggleFavorite = async (problem, favoriteStatus) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    // Optimistic state updates
    if (favoriteStatus) {
      setFavoriteIds((prev) => [...prev, problem.id]);
    } else {
      setFavoriteIds((prev) => prev.filter((id) => id !== problem.id));
    }

    try {
      const res = await fetch("http://localhost:5000/api/progress/favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          problemId: problem.id,
          problemName: problem.name || problem.title,
          leetcodeUrl: problem.leetcodeUrl,
          difficulty: problem.difficulty,
          topic: problem.topic,
          company: problem.companies?.[0] || "General",
          companies: problem.companies || ["General"],
          favorite: favoriteStatus
        })
      });
      const data = await res.json();
      if (data.success) {
        refreshStats();
      }
    } catch (error) {
      console.error("Failed to toggle favorite status:", error);
    }
  };

  const saveNote = async (problem, content) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setNotes((prev) => ({ ...prev, [problem.id]: content }));

    try {
      await fetch("http://localhost:5000/api/progress/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          problemId: problem.id,
          problemName: problem.name || problem.title,
          content
        })
      });
    } catch (error) {
      console.error("Failed to save personal notes:", error);
    }
  };

  return (
    <ProgressContext.Provider
      value={{
        solvedIds,
        favoriteIds,
        notes,
        dashboardStats,
        loading,
        toggleSolved,
        toggleFavorite,
        saveNote,
        refreshStats
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  return useContext(ProgressContext);
};
