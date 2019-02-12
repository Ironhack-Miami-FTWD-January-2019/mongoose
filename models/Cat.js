
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const catSchema = new Schema({
  name : String,
  color: { type: String, default: 'black'},
  age  : Number,
  created: {
    type: Date,
    default: Date.now
    },
});

const Cat = mongoose.model('Cat', catSchema);
module.exports = Cat;