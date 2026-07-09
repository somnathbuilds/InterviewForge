const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Helper function to generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, targetCompany } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Please add all required fields" });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists with this email" });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      targetCompany: targetCompany || ""
    });

    if (user) {
      return res.status(201).json({
        success: true,
        _id: user.id,
        name: user.name,
        email: user.email,
        targetCompany: user.targetCompany,
        token: generateToken(user.id)
      });
    } else {
      return res.status(400).json({ success: false, message: "Invalid user data" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }

    // Check for user (explicitly select password)
    const user = await User.findOne({ email }).select("+password");

    if (user && (await user.matchPassword(password))) {
      return res.json({
        success: true,
        _id: user.id,
        name: user.name,
        email: user.email,
        targetCompany: user.targetCompany,
        token: generateToken(user.id)
      });
    } else {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get current user profile details
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    return res.json({
      success: true,
      _id: user.id,
      name: user.name,
      email: user.email,
      targetCompany: user.targetCompany
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
