// controllers/user.controller.js
const User = require('../models/user.model');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.updateProfile = async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { username, email },
      { new: true, runValidators: true }
    ).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.getQuizzesTaken = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate('quizzesTaken.quizId');
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(user.quizzesTaken);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.takeQuiz = async (req, res) => {
  const { quizId, score } = req.body;
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    user.quizzesTaken.push({ quizId, score });
    await user.save();
    res.status(201).json({ message: 'Quiz enregistré avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};