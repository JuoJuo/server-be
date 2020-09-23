const { Waiter } = require('../model');

async function getWaiter(pageNum = 1, pageSize = 1000) {
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
  return await Waiter.deleteOne({ _id });
}

async function findOne({ uname: phone, pwd: password }) {
  const docs = await Waiter.find({ phone, password });
  return docs;
}

module.exports = {
  getWaiter,
  postWaiter,
  putWaiter,
  deleteWaiter,
  findOne,
};
