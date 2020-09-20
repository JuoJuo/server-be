const { Manager } = require('../model');

async function findOne({uname, pwd}) {
  const docs = await Manager
    .find({ uname, password: pwd });
  return docs;
}

async function add() {
  const arr = await Manager.find();

  if (arr.length === 0) {
    const docs = await new Manager({
      uname: 'admin',
      password: '123456',
    }).save();

    return docs;
  }

  return 'already have an super super account';
}

module.exports = {
  findOne,
  add,
};
