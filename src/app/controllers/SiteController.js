const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        Course.find({})
            // Truyền dữ liệu sang view(home.hbs)
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((error) => next(error));
    }
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
