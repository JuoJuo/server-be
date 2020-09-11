const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const connection = require('./connection');

const GuestSchema = new Schema({
  // _id: Schema.Types.ObjectId,
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

const Guest = connection.model('Guest', GuestSchema);
const Order = connection.model('Order', OrderSchema);

const g1 = new Guest({ phone: '321321', email: 'fdsafds@qq.com', password: 'xxxxx'});

const o1 = new Order({ orderTime: new Date(), mealTime: new Date('2020/09/15'), wayOfTakingMeals: '自提1', status: '制作中1'});
const o2 = new Order({ orderTime: new Date(), mealTime: new Date('2020/09/16'), wayOfTakingMeals: '自提2', status: '制作中2'});

async function go() {
  await g1.save();

  await o1.save();
  await o2.save();

  await Guest.findOneAndUpdate({ id: g1.id }, { orders: [ o1.id, o2.id ] });



  // const d2 = await Guest.findById('5f5b6c921b861f1c0c2a321f').populate('orders');
  // console.log(d2);

  // const d3 = await Order.findById('5f5b6c921b861f1c0c2a3220').populate('guest');
  // console.log(d3);

  // const rs = await Guest.findById('5f5b6c921b861f1c0c2a321f');
  //
  // console.log(rs);
  //
  // rs.orders = [rs.id];
  // const s = await rs.save();
  //
  // console.log(s);

  // const doc = await g1.save();
  //
  //
  // o1.guest = doc.id;
  // await o1.save();
  // await g1.save();
}


go();
