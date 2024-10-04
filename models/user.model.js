const mongoose = require('mongoose');

const TakenQuizSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'GlobalQuiz',
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  dateTaken: {
    type: Date,
    default: Date.now,
  },
});

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true
  },
  password: { 
    type: String, 
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'], 
    default: 'user',
  },
  quizzesTaken: [TakenQuizSchema], 
});


userSchema.methods.isAdmin = function() {
  return this.role === 'admin';
};

// Use the correct case for the schema reference
module.exports = mongoose.models.User || mongoose.model("User", userSchema);

