const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WaiterSchema = new Schema({
  phone: String,
  email: String,
  password: String,
});

module.exports = WaiterSchema;
