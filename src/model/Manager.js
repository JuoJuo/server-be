const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
  phone: String,
  email: String,
  password: String,
});

module.exports = ManagerSchema;
