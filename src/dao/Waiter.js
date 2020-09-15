const { Waiter } = require('./model');

async function getWaiter(pageNum, pageSize) {
  await Waiter
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

async function postWaiter(g) {
  await new Waiter(g).save();
}

async function putWaiter(id, obj) {
 await Waiter.update({ id }, obj);
}

async function deleteWaiter(id) {
  await Waiter.remove({ id });
}

module.exports = {
  getWaiter,
  postWaiter,
  putWaiter,
  deleteWaiter,
};
