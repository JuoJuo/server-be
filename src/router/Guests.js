const express = require('express');
const dao = require('../dao/Guests');
const guestRouter = express.Router();

guestRouter.get('/guest',async function (req, res) {
  const { pageNum, pageSize } = req.query;
  const data = await dao.getGuest(pageNum, pageSize);
  res.send(data);
});

guestRouter.post('/guest/login',async function (req, res) {
  const rs = await dao.findOne(req.body);

  if (rs.length !== 0) {
    req.session.guestId = rs[0]._id;
    req.session.cookie.maxAge = 2 * 60 * 60 * 1000;

    res.status(200).send(rs);
  } else {
    res.status(500).send({code: -1, msg: 'UserName or Password wrong!'});
  }
});

guestRouter.put('/guest/resetPassword',async function (req, res) {
  const data = await dao.resetPassword(req.body);
  res.send(data);
});

guestRouter.post('/guest',async function (req, res) {
  const doc = await dao.postGuest(req.body);
  if (doc === 1000) {
    res.send('phone already been registered!');
  } else {
    res.send(doc);
  }
});

guestRouter.put('/guest',async function (req, res) {
  const doc = await dao.putGuest(req.body);
  res.send(doc);
});

guestRouter.delete('/guest',async function (req, res) {
  const doc = await dao.deleteGuest(req.body);
  res.send(doc);
});

module.exports = guestRouter;
