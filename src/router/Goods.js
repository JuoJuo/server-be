const express = require('express');
const dao = require('../dao/Goods');
const managerRouter = express.Router();

managerRouter.get('/goods',async function (req, res) {
  const { pageNum, pageSize } = req.query;
  const data = await dao.getGoods(pageNum, pageSize);
  res.send(data);
});

managerRouter.post('/goods',async function (req, res) {
  await dao.postGoods();
  res.send('Got a POST request');
});

managerRouter.put('/goods',async function (req, res) {
  await dao.putGoods();
  res.send('Got a PUT request at /user');
});

managerRouter.delete('/goods',async function (req, res) {
  await dao.deleteGoods();
  res.send('Got a DELETE request at /user');
});

module.exports = managerRouter;
