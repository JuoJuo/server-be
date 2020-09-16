const express = require('express');
const dao = require('../dao/Goods');
const managerRouter = express.Router();

managerRouter.get('/manger', function (req, res) {
  dao.getManager();
  res.send('Hello World!');
});

managerRouter.post('/manger', function (req, res) {
  dao.postManager();
  res.send('Got a POST request');
});

managerRouter.put('/manger', function (req, res) {
  dao.putManager();
  res.send('Got a PUT request at /user');
});

managerRouter.delete('/manger', function (req, res) {
  dao.deleteManager();
  res.send('Got a DELETE request at /user');
});

module.exports = managerRouter;
