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

module.exports = waiterRouter;
