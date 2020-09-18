const { Order } = require('../model');

async function getOrder(pageNum = 1, pageSize = 5) {
  return await Order
    .find()
    .populate('guest')
    .populate('goods')
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

async function postOrder(arrOrders) {
  for (let i = 0; i < arrOrders.length; i++) {
    await new Order(arrOrders[i]).save();
  }

  return { msg: 'success' };
}

async function putOrder(obj) {
  const _id = obj._id;
  delete obj._id;
  return await Order.updateOne({ _id }, obj);
}

async function deleteOrder({ _id }) {
  return await Order.deleteOne({ _id });
}

module.exports = {
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
};
