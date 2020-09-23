const { Guest } = require('../model');

async function getGuest(pageNum = 1, pageSize = 1000) {
  const docs = await Guest
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize);

  return docs;
}

async function findOne({phone, password}) {
  const docs = await Guest
    .find({ phone, password });
  return docs;
}

async function resetPassword({phone, password}) {
  const rs = await Guest.find({ phone });
  if (rs.length === 0) {
    return 'sorry, there is no this account';
  }

  return await rs[0].updateOne({ password });
}

async function postGuest(g) {
  const docs = await Guest.find({ phone: g.phone });

  if (docs.length === 0) {
    return await new Guest(g).save();
  } else {
    return 1000;
  }
}

async function putGuest(obj) {
  const _id = obj._id;
  delete obj._id;
  return await Guest.updateOne({ _id }, obj);
}

async function deleteGuest({ _id }) {
  return await Guest.deleteOne({ _id });
}

module.exports = {
  getGuest,
  postGuest,
  putGuest,
  deleteGuest,
  findOne,
  resetPassword,
};
