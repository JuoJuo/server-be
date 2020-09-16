const { Comments } = require('./Comments');

async function getComments(userId, goodsId) {
  await Comments
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

async function postComments(g) {
  await new Comments(g).save();
}

async function putComments(id, obj) {
 await Comments.update({ id }, obj);
}

async function deleteComments(id) {
  await Comments.remove({ id });
}

module.exports = {
  getComments,
  postComments,
  putComments,
  deleteComments,
};
