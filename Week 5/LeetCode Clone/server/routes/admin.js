const express = require("express");
const { User, Admin, Problem } = require("../db/index");
const jwt = require("jsonwebtoken");
const { authenticateJwt, SECRET } = require("../middlewares/auth");

const router = express.Router();

router.get("/me", authenticateJwt, async (req, res) => {
  try {
    const admin = await Admin.findOne({
      email: req.user.email,
    });
    if (!admin) {
      res.status(403).json({ message: "Admin not found" });
      return;
    }
    res.json({
      email: admin.email,
    });
  } catch (error) {
    console.error("Error retrieving admin profile:", error);
    res.status(500).json({ error: "Failed to retrieve admin profile" });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(403).json({ message: "Admin already exists" });
    }

    const newAdmin = new Admin({ username, password, email });
    await newAdmin.save();

    const token = jwt.sign({ email, role: "admin" }, SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Admin created successfully", token });
  } catch (error) {
    console.error("Error creating admin:", error);
    res.status(500).json({ error: "Failed to create admin" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email, password });
    if (admin) {
      const token = jwt.sign({ email, role: "admin" }, SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Admin logged in successfully", token });
    } else {
      res.status(403).json({ message: "Admin not found" });
    }
  } catch (error) {
    console.error("Error logging in admin:", error);
    res.status(500).json({ error: "Failed to login admin" });
  }
});

router.post("/problems", authenticateJwt, async (req, res) => {
  try {
    const { title, description, difficulty, tags, hints, testCases } = req.body;
    const problem = new Problem({
      title,
      description,
      difficulty,
      tags,
      hints,
      testCases,
    });
    await problem.save();
    res.json({
      message: "Problem created successfully",
      problemid: problem._id,
    });
  } catch (error) {
    console.error("Error creating problem:", error);
    res.status(500).json({ error: "Failed to create problem" });
  }
});

router.get("/problems", authenticateJwt, async (req, res) => {
  try {
    const problems = await Problem.find({});
    res.json({ problems });
  } catch (error) {
    console.error("Error retrieving problems:", error);
    res.status(500).json({ error: "Failed to retrieve problems" });
  }
});

router.get("/problems/:id", authenticateJwt, async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem) {
      res.status(404).json({ message: "Problem not found" });
      return;
    }
    res.json({ problem });
  } catch (error) {
    console.error("Error retrieving problem:", error);
    res.status(500).json({ error: "Failed to retrieve problem" });
  }
});

router.put("/problems/:id", authenticateJwt, async (req, res) => {
  try {
    const problem = await Problem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (problem) {
      res.json({ message: "Problem updated successfully" });
    } else {
      res.status(404).json({ message: "Problem not found" });
    }
  } catch (error) {
    console.error("Error updating problem:", error);
    res.status(500).json({ error: "Failed to update problem" });
  }
});

module.exports = router;
