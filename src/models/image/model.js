const mongoose = require('mongoose');
const { schema } = require('./schema');
const Image = mongoose.model('images', schema);

module.exports = { Image };