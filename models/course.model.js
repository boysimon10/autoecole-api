const mongoose = require('mongoose');

const ChapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const QuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: Number,
    required: true,
  },
});

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: {
    type: [QuestionSchema],
    required: true,
  },
  pointsPerQuestion: {
    type: Number,
    required: true,
  },
});

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  chapters: {
    type: [ChapterSchema],
    required: true,
  },
  quiz: {
    type: QuizSchema,
  },
  // Uncomment this if you want to use createdBy
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Correcting the export statement
module.exports = mongoose.models.Course || mongoose.model("Course", CourseSchema);

