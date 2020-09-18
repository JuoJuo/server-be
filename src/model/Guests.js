const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  phone: String,
  username: String,
  email: String,
  password: String,
  type: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order'
    }
  ],
});

module.exports = GuestSchema;
