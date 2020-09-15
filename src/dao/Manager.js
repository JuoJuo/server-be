const { Manager } = require('./model');

async function getManager(pageNum, pageSize) {
  await Manager
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

async function postManager(g) {
  await new Manager(g).save();
}

async function putManager(id, obj) {
 await Manager.update({ id }, obj);
}

async function deleteManager(id) {
  await Manager.remove({ id });
}

module.exports = {
  getManager,
  postManager,
  putManager,
  deleteManager,
};
