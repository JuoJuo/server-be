const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = mongoose.createConnection("mongodb://127.0.0.1/test",{ useNewUrlParser: true,useUnifiedTopology: true});

const GuestSchema = new Schema({
  _id: Schema.Types.ObjectId,
  phone: String,
  email: String,
  password: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order'
    }
  ],
});
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

const guest = connection.model('Guest', GuestSchema);

const g1 = new guest({ phone: '321321', email: 'fdsafds@qq.com', password: 'xxxxx'});
g1.save();

const order = mongoose.model('Order', OrderSchema);
