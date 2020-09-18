const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderTime: Date,
  mealTime: Date,
  wayOfTakingMeals: String,
  status: String,
  price: String,
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'Guest'
  },
  goods: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Goods'
    }
  ]
});

module.exports = OrderSchema;
