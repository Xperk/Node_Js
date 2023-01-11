const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: String,
    description: String,
    image: String,
    createdAt: Date,
    updatedAt: Date,
});
module.exports = MyModel = mongoose.model('Course', Course);
