const mongoose = require('mongoose');

const GlobalQuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const GlobalQuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: {
    type: [GlobalQuestionSchema],
    required: true,
  },
  pointsPerQuestion: {
    type: Number,
    required: true,
    default: 1,
  },
  /* createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }, */
});

// Correcting the export statement to CommonJS style
module.exports = mongoose.models.GlobalQuiz || mongoose.model("GlobalQuiz", GlobalQuizSchema);
