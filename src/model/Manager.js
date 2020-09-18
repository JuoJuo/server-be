const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
  uname: String,
  password: String,
});

module.exports = ManagerSchema;
