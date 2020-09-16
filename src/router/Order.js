const express = require('express');
const dao = require('../dao/Order');
const orderRouter = express.Router();

orderRouter.get('/order',async function (req, res) {
  const { pageNum, pageSize } = req.query;
  const data = await dao.getOrder(pageNum, pageSize);
  res.send(data);
});

orderRouter.post('/order',async function (req, res) {
  await dao.postOrder(req.body);
  res.send('Got a POST request');
});

orderRouter.put('/order',async function (req, res) {
  await dao.putOrder(req.body);
  res.send('Got a PUT request at /user');
});

orderRouter.delete('/order',async function (req, res) {
  await dao.deleteOrder(req.body);
  res.send('Got a DELETE request at /user');
});

module.exports = orderRouter;
