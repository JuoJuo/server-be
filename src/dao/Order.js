const { Order } = require('./model');

async function getOrder(pageNum, pageSize) {
  await Order
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

async function postOrder(g) {
  await new Order(g).save();
}

async function putOrder(id, obj) {
 await Order.update({ id }, obj);
}

async function deleteOrder(id) {
  await Order.remove({ id });
}

module.exports = {
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
};
