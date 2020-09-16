const express = require('express');
const dao = require('../dao/Waiter');
const waiterRouter = express.Router();

waiterRouter.get('/waiter',async function (req, res) {
  const { pageNum, pageSize } = req.query;
  const data = await dao.getWaiter(pageNum, pageSize);
  res.send(data);
});

waiterRouter.post('/waiter',async function (req, res) {
  await dao.postWaiter(req.body);
  res.send('Got a POST request');
});

waiterRouter.put('/waiter',async function (req, res) {
  await dao.putWaiter(req.body);
  res.send('Got a PUT request at /user');
});

waiterRouter.delete('/waiter',async function (req, res) {
  await dao.deleteWaiter(req.body);
  res.send('Got a DELETE request at /user');
});

module.exports = waiterRouter;
