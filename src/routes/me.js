const express = require('express');
const route = express.Router();

const meControllers = require('../app/controllers/meController');
route.get('/stored/courses', meControllers.storedCourses);
route.get('/trash/courses', meControllers.trashCourses);
module.exports = route;
