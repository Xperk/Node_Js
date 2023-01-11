class NewsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('show');
    }
}
module.exports = new NewsController();
