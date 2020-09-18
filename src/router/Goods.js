const express = require('express');
const dao = require('../dao/Goods');
const managerRouter = express.Router();

managerRouter.get('/goods',async function (req, res) {
  const { pageNum, pageSize } = req.query;
  const data = await dao.getGoods(pageNum, pageSize);
  res.send(data);
});

managerRouter.post('/goods',async function (req, res) {
  const doc = await dao.postGoods(req.body);
  res.send(doc);
});

managerRouter.put('/goods',async function (req, res) {
  const doc = await dao.putGoods(req.body);
  res.send(doc);
});

managerRouter.delete('/goods',async function (req, res) {
  const doc = await dao.deleteGoods(req.body);
  res.send(doc);
});

module.exports = managerRouter;
