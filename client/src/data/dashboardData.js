export const studentData = {
  name: "Somnath",
  streak: 7,
  readiness: 82,
  goalsSummary: "Solve 2 DSA + Revise DBMS"
};

export const progressStats = [
  {
    title: "DSA Progress",
    value: "145 / 450",
    description: "Problems Solved",
    progress: 32,
    type: "dsa"
  },
  {
    title: "Aptitude Progress",
    value: "62%",
    description: "Modules Mastered",
    progress: 62,
    type: "aptitude"
  },
  {
    title: "Core Subjects",
    value: "4 / 6",
    description: "Subjects Completed",
    progress: 67,
    type: "core"
  },
  {
    title: "Mock Interviews",
    value: "8 Completed",
    description: "Next Company: Amazon",
    progress: null,
    type: "mocks"
  }
];

export const dailyGoalsData = [
  { id: 1, name: "Solve 2 Binary Tree problems (DFS/BFS)", category: "DSA", completed: false },
  { id: 2, name: "Revise Operating Systems Page Replacement algorithms", category: "Core Subjects", completed: false },
  { id: 3, name: "Solve 1 quantitative aptitude practice test", category: "Aptitude", completed: true },
  { id: 4, name: "Review Amazon Online Assessment guides", category: "Company", completed: false }
];

export const aiRecommendations = [
  {
    title: "Focus on Dynamic Programming",
    desc: "Your diagnostic accuracy in DP is at 45%. Solve 'Longest Common Subsequence' to improve placement match-rates.",
    priority: "High Priority",
    badgeType: "rose"
  },
  {
    title: "Revise Network Layer Protocols",
    desc: "Based on Microsoft OA patterns, network protocols (IP, ICMP, ARP) are heavily tested. Review OS & CN guides.",
    priority: "Recommended",
    badgeType: "blue"
  }
];

export const weeklyProgressData = [
  { day: "Mon", solved: 4 },
  { day: "Tue", solved: 7 },
  { day: "Wed", solved: 5 },
  { day: "Thu", solved: 9 },
  { day: "Fri", solved: 12 },
  { day: "Sat", solved: 8 },
  { day: "Sun", solved: 15 }
];
