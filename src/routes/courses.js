const express = require('express');
const route = express.Router();

const CourseController = require('../app/controllers/CourseController');

route.get('/create', CourseController.create);
route.get('/:id/edit', CourseController.edit);
route.put('/:id', CourseController.update);
route.delete('/:id', CourseController.destroy);
route.post('/store', CourseController.store);
route.get('/:slug', CourseController.show);

module.exports = route;
