const User = require("../models/user");
const generateToken = require("../utils/generateToken");

// Local signup
const registerUser = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      res.status(400);
      throw new Error("Passwords do not match");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      username,
      email,
      password,
      provider: "local",
    });

    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      provider: user.provider,
      token: generateToken(user._id),
    });
  } catch (error) {
    next(error);
  }
};

// Local login
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (
      user &&
      user.provider === "local" &&
      (await user.matchPassword(password))
    ) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        provider: user.provider,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    next(error);
  }
};

// Social signup/login (Google/Facebook)
const socialLogin = async (req, res, next) => {
  try {
    const { email, provider } = req.body;

    if (!email || !provider) {
      res.status(400);
      throw new Error("Email and provider are required");
    }

    let user = await User.findOne({ email });

    if (!user) {
      // Create new social user
      user = await User.create({
        username: email.split("@")[0],
        email,
        provider,
      });
    }

    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      provider: user.provider,
      token: generateToken(user._id),
    });
  } catch (error) {
    next(error);
  }
};

// Get profile
const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser, loginUser, socialLogin, getProfile };
