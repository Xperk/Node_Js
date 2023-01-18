const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: String,
        description: String,
        image: String,
        videoId: String,
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);
module.exports = MyModel = mongoose.model('Course', Course);
