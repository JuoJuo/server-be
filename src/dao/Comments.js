const { Comments } = require('../model');

async function getCommentsByGoods(goods, pageNum = 1, pageSize = 5) {
  return await Comments
    .find({ goods })
    .populate('guest')
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

async function postComments(g) {
  await new Comments(g).save();
}

async function putComments(obj) {
  const _id = obj._id;
  delete obj._id;

  return await Comments.updateOne({ _id }, obj);
}

async function deleteComments({ _id }) {
  return await Comments.remove({ _id });
}

module.exports = {
  postComments,
  putComments,
  deleteComments,
  getCommentsByGoods,
};
