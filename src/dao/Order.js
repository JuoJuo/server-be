const { Order } = require('../model');

async function getOrder(pageNum = 1, pageSize = 5) {
  return await Order
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

async function postOrder(g) {
  return await new Order(g).save();
}

async function putOrder(obj) {
  const _id = obj._id;
  delete obj._id;

  return await Order.updateOne({ _id }, obj);
}

async function deleteOrder({ _id }) {
  return await Order.remove({ _id });
}

module.exports = {
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
};
