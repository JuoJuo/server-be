const { Goods } = require('./model');

async function getGoods(pageNum, pageSize) {
  await Goods
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

async function postGoods(g) {
  await new Goods(g).save();
}

async function putGoods(id, obj) {
 await Goods.update({ id }, obj);
}

async function deleteGoods(id) {
  await Goods.remove({ id });
}

module.exports = {
  getGoods,
  postGoods,
  putGoods,
  deleteGoods,
};
