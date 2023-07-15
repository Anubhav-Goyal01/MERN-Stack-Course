const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  solvedProblems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Problem" }],
  favoriteProblems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Problem" }],
});

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const testCaseSchema = new mongoose.Schema({
  input: { type: String, required: true },
  output: { type: String, required: true },
});

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  tags: [{ type: String, required: true }],
  hints: [{ type: String, required: true }],
  testCases: [testCaseSchema],
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Problem = mongoose.model("Problem", problemSchema);

module.exports = {
  User,
  Admin,
  Problem,
};
