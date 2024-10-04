const express = require('express');
require('./config/db');
const app = express();
const courseRoutes = require('./routes/course.routes');
const globalQuizRoutes = require('./routes/globalQuiz.routes');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const authMiddleware = require('./middleware/auth.middleware');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './config/.env' });

const port = process.env.PORT || 5000; 

app.use(cors());

// Middleware pour analyser les données JSON dans les requêtes
app.use(express.json());
app.use(cookieParser());

app.use('/user', userRoutes);
app.use('/auth', authRoutes)
app.use('/courses', courseRoutes);
app.use('/globalQuizzes', globalQuizRoutes);

// Simple test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

//server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});