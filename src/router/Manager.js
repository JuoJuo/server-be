const express = require('express');
const dao = require('../dao/Manager');
const managerRouter = express.Router();

managerRouter.get('/manager',async function (req, res) {
  const data = await dao.findOne(req.body);
  res.send(data);
});

managerRouter.get('/add',async function (req, res) {
  const data = await dao.add();
  res.send(data);
});

module.exports = managerRouter;
