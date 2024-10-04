const GlobalQuiz = require('../models/globalQuiz.model');

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await GlobalQuiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve quizzes' });
  }
};

exports.createQuiz = async (req, res) => {
  try {
    const newQuiz = new GlobalQuiz(req.body);
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create quiz' });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    const updatedQuiz = await GlobalQuiz.findByIdAndUpdate(req.body._id, req.body, { new: true });
    if (!updatedQuiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json(updatedQuiz);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update quiz' });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    const deletedQuiz = await GlobalQuiz.findByIdAndDelete(req.params.id);
    if (!deletedQuiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json({ message: 'Quiz deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete quiz' });
  }
};

exports.getQuizById = async (req, res) => {
  try {
    const quiz = await GlobalQuiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve quiz' });
  }
};

exports.updateQuizById = async (req, res) => {
  try {
    const updatedQuiz = await GlobalQuiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedQuiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json(updatedQuiz);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update quiz' });
  }
};