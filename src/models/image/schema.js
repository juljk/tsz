const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  _id: {
    type: ObjectId,
  },
  url: {
    type: String,
    required: [true],
  },
  category: {
    type: String,
    required: [true],
  },
  x: {
    type: String,
    required: [true],
  },
  y: {
    type: String,
    required: [true],
  },
  year: {
    type: Number,
    required: [true],
  },
  inStock: {
    type: Boolean,
    required: [true],
  },  
});

module.exports = { schema };