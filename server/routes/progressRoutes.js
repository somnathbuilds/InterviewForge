const express = require("express");
const router = express.Router();
const {
  getProgress,
  toggleSolved,
  toggleFavorite,
  saveNote,
  getUserQuestionsData
} = require("../controllers/progressController");
const { protect } = require("../middleware/authMiddleware");

// Secure all progress actions
router.use(protect);

router.get("/", getProgress);
router.get("/questions", getUserQuestionsData);
router.post("/solved", toggleSolved);
router.post("/favorite", toggleFavorite);
router.post("/notes", saveNote);

module.exports = router;
