const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
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
Course.plugin(mongooseDelete, { overrideMethods: 'all' }, { deletedAt: true });
mongoose.plugin(slug);

module.exports = MyModel = mongoose.model('Course', Course);
