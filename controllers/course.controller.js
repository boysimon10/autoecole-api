const Course = require('../models/course.model');

exports.createCourse = async (req, res) => {
  try {
    const { title, description, chapters, quiz } = req.body;

    const newCourse = new Course({
      title,
      description,
      chapters: JSON.parse(chapters),
      quiz: JSON.parse(quiz),
    });

    await newCourse.save();

    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error retrieving courses:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

exports.getCourseById = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error('Error retrieving course:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};