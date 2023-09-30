const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: String,
    path: String,
});

const model = new mongoose.model('model', schema);

module.exports = model;
