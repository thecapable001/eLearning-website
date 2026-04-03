const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const connectDB = require("./database/config/connection");
const User = require("./database/models/user");
const Feedback = require("./database/models/feedback");
const verifyToken = require("./middleware/auth");

const app = express();
const DB_URL = process.env.DB_URL;
const JWT_SECRET = process.env.JWT_SECRET || "bytebridge_secret_key";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/api", async (req, res, next) => {
  try {
    await connectDB(DB_URL);
    return next();
  } catch (error) {
    console.error("Database bootstrap error:", error.message);
    return res.status(500).json({
      message: "Backend database is not configured correctly.",
    });
  }
});

function normalizeEmail(email = "") {
  return email.trim().toLowerCase();
}

function buildAuthResponse(user) {
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      joinedAt: user.date,
    },
  };
}

app.get("/", (req, res) => {
  res.send("Welcome to ByteBridge Backend API");
});

app.get("/api/health", async (req, res) => {
  try {
    await connectDB(DB_URL);
    return res.json({
      ok: true,
      mongoReadyState: mongoose.connection.readyState,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: error.message,
      mongoReadyState: mongoose.connection.readyState,
    });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const name = req.body.name?.trim();
    const email = normalizeEmail(req.body.email);
    const { password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required." });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successfully",
      ...buildAuthResponse(newUser),
    });
  } catch (error) {
    console.error("Register error:", error.message);
    return res.status(500).json({ message: "Error registering user" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const { password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    return res.json({
      message: "Login successful",
      ...buildAuthResponse(user),
    });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Error logging in" });
  }
});

app.get("/api/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("_id name email date");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        joinedAt: user.date,
      },
    });
  } catch (error) {
    console.error("Profile error:", error.message);
    return res.status(500).json({ message: "Unable to load profile" });
  }
});

app.get("/api/feedback", async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ date: -1 }).lean();
    return res.json(feedback);
  } catch (error) {
    console.error("Feedback list error:", error.message);
    return res.status(500).json({ message: "Unable to load feedback." });
  }
});

app.post("/api/feedback", async (req, res) => {
  try {
    const name = req.body.name?.trim();
    const comment = req.body.comment?.trim();
    const image = req.body.image?.trim() || "";
    const rating = Number(req.body.rating);

    if (!name || !comment) {
      return res.status(400).json({ message: "Name and comment are required." });
    }

    if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
      return res.status(400).json({ message: "Rating must be between 1 and 5." });
    }

    const createdFeedback = await Feedback.create({
      name,
      comment,
      image,
      rating,
    });

    return res.status(201).json({
      message: "Feedback submitted successfully.",
      feedback: createdFeedback,
    });
  } catch (error) {
    console.error("Feedback create error:", error.message);
    return res.status(500).json({ message: "Unable to submit feedback." });
  }
});

app.delete("/api/feedback/:id", async (req, res) => {
  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);

    if (!deletedFeedback) {
      return res.status(404).json({ message: "Feedback not found." });
    }

    return res.json({ message: "Feedback removed successfully." });
  } catch (error) {
    console.error("Feedback delete error:", error.message);
    return res.status(500).json({ message: "Unable to remove feedback." });
  }
});

module.exports = app;
