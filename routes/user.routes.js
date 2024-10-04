const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');



router.get('/profile', authMiddleware, userController.getProfile);
router.put('/profile', authMiddleware, userController.updateProfile);
router.get('/quizzes', authMiddleware, userController.getQuizzesTaken);
router.post('/take-quiz', authMiddleware, userController.takeQuiz);

module.exports = router;