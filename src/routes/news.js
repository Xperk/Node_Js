const express = require('express')
const route = express.Router()

const NewsController = require('../app/controllers/NewsController')

route.use('/:slug',NewsController.show);
route.use('/',NewsController.index);

module.exports = route