const express = require('express');
const dao = require('../dao/Waiter');
const waiterRouter = express.Router();

waiterRouter.get('/waiter', function (req, res) {
  res.send('Hello World!');
});

waiterRouter.post('/waiter', function (req, res) {
  res.send('Got a POST request');
});

waiterRouter.put('/waiter', function (req, res) {
  res.send('Got a PUT request at /user');
});

waiterRouter.delete('/waiter', function (req, res) {
  res.send('Got a DELETE request at /user');
});

module.exports = waiterRouter;
