const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoodsSchema = new Schema({
  name: String,
  desc: String,
  price: String,
});

module.exports = GoodsSchema;
