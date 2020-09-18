const express = require('express');
const dao = require('../dao/Order');
const orderRouter = express.Router();

orderRouter.get('/order',async function (req, res) {
  const { pageNum, pageSize } = req.query;
  const data = await dao.getOrder(pageNum, pageSize);
  res.send(data);
});

orderRouter.post('/order',async function (req, res) {
  const doc = await dao.postOrder(req.body);
  res.send(doc);
});

orderRouter.put('/order',async function (req, res) {
  const doc = await dao.putOrder(req.body);
  res.send(doc);
});

orderRouter.delete('/order',async function (req, res) {
  const doc = await dao.deleteOrder(req.body);
  res.send(doc);
});

module.exports = orderRouter;
