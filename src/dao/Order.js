const { Order } = require('../model');

async function getOrder(pageNum = 1, pageSize = 1000, condition) {
  return await Order
    .find(condition)
    .populate('guest')
    .populate('goods')
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

function getTxt(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

async function postOrder(arrOrders) {
  const allOrder = await Order.find();
  const times = allOrder.map(({ mealTime }) => getTxt(new Date(mealTime)));
  const clientTimes = arrOrders.map(({ mealTime }) => getTxt(new Date(mealTime)));

  for (let i = 0; i < times.length; i++) {
    const rs = clientTimes.filter(timeStr => timeStr === times[i]);
    if (rs.length >= 1) {
      return { msg: 'sorry, mealTime conflict with other customer， please change mealTime time ！', code: '-1' }
    }
  }

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
