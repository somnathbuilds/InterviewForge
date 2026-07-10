const SolvedQuestion = require("../models/SolvedQuestion");
const FavoriteQuestion = require("../models/FavoriteQuestion");
const UserNote = require("../models/UserNote");
const UserProgress = require("../models/UserProgress");

// @desc    Get user progress summary (overall stats, streak, dashboard logs)
// @route   GET /api/progress
// @access  Private
exports.getProgress = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get solved count & favorites count
    const solvedCount = await SolvedQuestion.countDocuments({ user: userId });
    const favoriteCount = await FavoriteQuestion.countDocuments({ user: userId });

    // Get recently solved questions (limit to 5)
    const recentlySolved = await SolvedQuestion.find({ user: userId })
      .sort({ solvedAt: -1 })
      .limit(5);

    // Get or create UserProgress profile log
    let progress = await UserProgress.findOne({ user: userId });
    if (!progress) {
      progress = await UserProgress.create({
        user: userId,
        currentStreak: 7, // Placeholder as requested
        maxStreak: 14,
        placementReadiness: 82 // Placeholder default
      });
    }

    // Dynamic placement readiness based on completion (default target base = 150)
    const totalTargetCount = 150;
    const computedPercentage = Math.min(Math.round((solvedCount / totalTargetCount) * 100), 100);
    progress.placementReadiness = computedPercentage > 0 ? computedPercentage : 82; // Fallback to placeholder if none solved
    await progress.save();

    return res.json({
      success: true,
      totalSolved: solvedCount,
      totalFavorites: favoriteCount,
      progressPercentage: progress.placementReadiness,
      currentStreak: progress.currentStreak,
      recentlySolved: recentlySolved.map((q) => ({
        id: q.problemId,
        name: q.problemName,
        difficulty: q.difficulty,
        topic: q.topic,
        company: q.companies?.[0] || "General",
        companies: q.companies || [],
        solvedAt: q.solvedAt
      }))
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Toggle solved status for a coding challenge
// @route   POST /api/progress/solved
// @access  Private
// Supports both 'companies' array and backward compatible 'company' string
exports.toggleSolved = async (req, res) => {
  try {
    const userId = req.user.id;
    const { problemId, problemName, leetcodeUrl, difficulty, topic, company, companies, solved } = req.body;

    if (problemId === undefined || solved === undefined) {
      return res.status(400).json({ success: false, message: "Please specify problemId and solved status" });
    }

    if (solved) {
      const companiesList = Array.isArray(companies)
        ? companies
        : (company ? [company] : ["General"]);

      // Upsert solved record
      await SolvedQuestion.findOneAndUpdate(
        { user: userId, problemId },
        {
          problemName,
          leetcodeUrl: leetcodeUrl || "https://leetcode.com",
          difficulty: difficulty || "Easy",
          topic: topic || "General Algorithms",
          companies: companiesList
        },
        { upsert: true, new: true }
      );
    } else {
      // Remove solved record
      await SolvedQuestion.findOneAndDelete({ user: userId, problemId });
    }

    // Recalculate Solved counts in UserProgress
    const solvedCount = await SolvedQuestion.countDocuments({ user: userId });
    await UserProgress.findOneAndUpdate(
      { user: userId },
      { dsaSolvedCount: solvedCount },
      { upsert: true }
    );

    return res.json({ success: true, solved });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Toggle favorited status for a coding challenge
// @route   POST /api/progress/favorite
// @access  Private
// Supports both 'companies' array and backward compatible 'company' string
exports.toggleFavorite = async (req, res) => {
  try {
    const userId = req.user.id;
    const { problemId, problemName, leetcodeUrl, difficulty, topic, company, companies, favorite } = req.body;

    if (problemId === undefined || favorite === undefined) {
      return res.status(400).json({ success: false, message: "Please specify problemId and favorite status" });
    }

    if (favorite) {
      const companiesList = Array.isArray(companies)
        ? companies
        : (company ? [company] : ["General"]);

      // Upsert favorite record
      await FavoriteQuestion.findOneAndUpdate(
        { user: userId, problemId },
        {
          problemName,
          leetcodeUrl: leetcodeUrl || "https://leetcode.com",
          difficulty: difficulty || "Easy",
          topic: topic || "General Algorithms",
          companies: companiesList
        },
        { upsert: true, new: true }
      );
    } else {
      // Remove favorite record
      await FavoriteQuestion.findOneAndDelete({ user: userId, problemId });
    }

    return res.json({ success: true, favorite });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Save/update personal notes for a coding challenge
// @route   POST /api/progress/notes
// @access  Private
exports.saveNote = async (req, res) => {
  try {
    const userId = req.user.id;
    const { problemId, problemName, content } = req.body;

    if (problemId === undefined || content === undefined) {
      return res.status(400).json({ success: false, message: "Please specify problemId and note content" });
    }

    await UserNote.findOneAndUpdate(
      { user: userId, problemId },
      { problemName: problemName || "Unknown Question", content },
      { upsert: true, new: true }
    );

    return res.json({ success: true, content });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Batch retrieve user question stats (solved list, favorites list, and notes hash)
// @route   GET /api/progress/questions
// @access  Private
exports.getUserQuestionsData = async (req, res) => {
  try {
    const userId = req.user.id;

    const solvedList = await SolvedQuestion.find({ user: userId }, "problemId");
    const favoriteList = await FavoriteQuestion.find({ user: userId }, "problemId");
    const notesList = await UserNote.find({ user: userId }, "problemId content");

    const solvedIds = solvedList.map((q) => q.problemId);
    const favoriteIds = favoriteList.map((q) => q.problemId);
    
    const notesMap = {};
    notesList.forEach((n) => {
      notesMap[n.problemId] = n.content;
    });

    return res.json({
      success: true,
      solved: solvedIds,
      favorites: favoriteIds,
      notes: notesMap
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
