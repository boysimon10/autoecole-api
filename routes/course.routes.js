const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

// POST route to create a new course
router.post('/', courseController.createCourse);

// GET route to retrieve all courses
router.get('/', courseController.getAllCourses);

// GET route to retrieve a specific course by ID
router.get('/:id', courseController.getCourseById);

module.exports = router;