const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderTime: Date,
  mealTime: Date,
  wayOfTakingMeals: String,
  status: String,
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'Guest'
  }
});

module.exports = OrderSchema;
