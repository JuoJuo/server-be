const { Guest } = require('../model');

async function getGuest(pageNum = 1, pageSize = 5) {
  const docs = await Guest
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);

  return docs;
}

async function postGuest(g) {
  return await new Guest(g).save();
}

async function putGuest(obj) {
  const _id = obj._id;
  delete obj._id;
  return await Guest.updateOne({ _id }, obj);
}

async function deleteGuest({ _id }) {
  return await Guest.remove({ _id });
}

module.exports = {
  getGuest,
  postGuest,
  putGuest,
  deleteGuest,
};
