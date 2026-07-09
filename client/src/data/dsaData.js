export const dsaStats = {
  total: 450,
  solved: 145,
  remaining: 305,
  streak: 7
};

export const dsaProblems = [
  {
    id: 1,
    name: "Two Sum",
    difficulty: "Easy",
    topic: "Arrays",
    companies: ["Google", "Amazon", "Microsoft"],
    favorite: true,
    solved: true
  },
  {
    id: 2,
    name: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topic: "Strings",
    companies: ["Amazon", "Microsoft"],
    favorite: false,
    solved: true
  },
  {
    id: 3,
    name: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    topic: "Arrays",
    companies: ["Google", "Apple"],
    favorite: true,
    solved: false
  },
  {
    id: 4,
    name: "Reverse Linked List",
    difficulty: "Easy",
    topic: "LinkedLists",
    companies: ["Microsoft", "Adobe", "Amazon"],
    favorite: false,
    solved: true
  },
  {
    id: 5,
    name: "Merge k Sorted Lists",
    difficulty: "Hard",
    topic: "LinkedLists",
    companies: ["Google", "Amazon", "Facebook"],
    favorite: true,
    solved: false
  },
  {
    id: 6,
    name: "Longest Palindromic Substring",
    difficulty: "Medium",
    topic: "Strings",
    companies: ["Amazon", "Meta", "Google"],
    favorite: false,
    solved: true
  },
  {
    id: 7,
    name: "Container With Most Water",
    difficulty: "Medium",
    topic: "Arrays",
    companies: ["Google", "Amazon"],
    favorite: true,
    solved: false
  },
  {
    id: 8,
    name: "Edit Distance",
    difficulty: "Hard",
    topic: "Dynamic Programming",
    companies: ["Google", "Microsoft"],
    favorite: false,
    solved: false
  },
  {
    id: 9,
    name: "Course Schedule",
    difficulty: "Medium",
    topic: "Graphs",
    companies: ["Google", "Meta"],
    favorite: true,
    solved: false
  },
  {
    id: 10,
    name: "Number of Islands",
    difficulty: "Medium",
    topic: "Graphs",
    companies: ["Amazon", "Microsoft", "Google"],
    favorite: true,
    solved: true
  }
];

export const dsaSidebarData = {
  todayGoal: "Solve 2 Graph DFS problems & revise DP edit-distance",
  weeklySolved: [
    { day: "Mon", count: 2 },
    { day: "Tue", count: 4 },
    { day: "Wed", count: 1 },
    { day: "Thu", count: 3 },
    { day: "Fri", count: 5 },
    { day: "Sat", count: 2 },
    { day: "Sun", count: 4 }
  ],
  topicCompletion: [
    { topic: "Arrays & Hashing", solved: 42, total: 50 },
    { topic: "Strings", solved: 28, total: 40 },
    { topic: "LinkedLists", solved: 15, total: 30 },
    { topic: "Dynamic Programming", solved: 10, total: 50 },
    { topic: "Trees & Graphs", solved: 18, total: 60 }
  ]
};
