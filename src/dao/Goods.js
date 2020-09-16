const { Goods } = require('../model');

async function getGoods(pageNum = 1, pageSize = 5) {
  return await Goods
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

async function postGoods(g) {
  return await new Goods(g).save();
}

async function putGoods(obj) {
  const _id = obj._id;
  delete obj._id;
  return await Goods.updateOne({ _id }, obj);
}

async function deleteGoods({ _id }) {
  return await Goods.remove({ _id });
}

module.exports = {
  getGoods,
  postGoods,
  putGoods,
  deleteGoods,
};
