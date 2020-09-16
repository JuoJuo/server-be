const { Guest } = require('./model');

async function getGuest(pageNum, pageSize) {
  await Guest
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);
}

async function postGuest(g) {
  await new Guest(g).save();
}

async function putGuest(id, obj) {
    await Guest.update({ id }, obj);
}

async function deleteGuest(id) {
    await Guest.remove({ id });
}

module.exports = {
  getGuest,
  postGuest,
  putGuest,
  deleteGuest,
};
