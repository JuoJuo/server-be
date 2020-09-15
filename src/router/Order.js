const express = require('express');
const dao = require('../dao/Order');
const orderRouter = express.Router();

orderRouter.get('/order', function (req, res) {
  res.send('Hello World!');
});

orderRouter.post('/order', function (req, res) {
  res.send('Got a POST request');
});

orderRouter.put('/order', function (req, res) {
  res.send('Got a PUT request at /user');
});

orderRouter.delete('/order', function (req, res) {
  res.send('Got a DELETE request at /user');
});

module.exports = orderRouter;
