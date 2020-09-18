const { Waiter } = require('../model');

async function getWaiter(pageNum = 1, pageSize = 20) {
  return await Waiter
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

async function postWaiter(g) {
  return await new Waiter(g).save();
}

async function putWaiter(obj) {
  const _id = obj._id;
  delete obj._id;

  return await Waiter.updateOne({ _id }, obj);
}

async function deleteWaiter({ _id }) {
  return await Waiter.remove({ _id });
}

module.exports = {
  getWaiter,
  postWaiter,
  putWaiter,
  deleteWaiter,
};
