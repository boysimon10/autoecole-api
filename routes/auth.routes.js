const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Route pour l'inscription
router.post('/register', authController.register);

// Route pour le login
router.post('/login', authController.login);

module.exports = router;
