const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment: String,
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'Guest'
  },
  goods: {
    type: Schema.Types.ObjectId,
    ref: 'Goods'
  }
});

module.exports = CommentSchema;
