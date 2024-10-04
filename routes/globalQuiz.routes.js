const express = require('express');
const router = express.Router();
const globalQuizController = require('../controllers/globalQuiz.controller');


router.get('/', globalQuizController.getAllQuizzes);
router.post('/', globalQuizController.createQuiz);
router.put('/', globalQuizController.updateQuiz);
router.delete('/:id', globalQuizController.deleteQuiz);


router.get('/:id', globalQuizController.getQuizById);
router.put('/:id', globalQuizController.updateQuizById);

module.exports = router;