const express = require('express');
const dao = require('../dao/Waiter');
const waiterRouter = express.Router();

waiterRouter.get('/waiter',async function (req, res) {
  const { pageNum, pageSize } = req.query;
  const data = await dao.getWaiter(pageNum, pageSize);
  res.send(data);
});

waiterRouter.post('/waiter',async function (req, res) {
  const doc = await dao.postWaiter(req.body);
  res.send(doc);
});

waiterRouter.put('/waiter',async function (req, res) {
  const doc = await dao.putWaiter(req.body);
  res.send(doc);
});

waiterRouter.delete('/waiter',async function (req, res) {
  const doc = await dao.deleteWaiter(req.body);
  res.send(doc);
});

waiterRouter.post('/loginWaiter',async function (req, res) {
  const rs = await dao.findOne(req.body);

  if (rs.length !== 0) {
    req.session.loginId = rs[0]._id;
    req.session.cookie.maxAge = 2 * 60 * 60 * 1000;

    res.status(200).send({code: 1, data: rs, msg: 'success'});
  } else {
    res.status(500).send({code: -1, msg: 'userName or password wrong!'});
  }
});

module.exports = waiterRouter;
