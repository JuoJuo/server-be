const express = require('express');
const dao = require('../dao/Guests');
const guestRouter = express.Router();

guestRouter.get('/guest', function (req, res) {
  const { pageNum, pageSize } = req.query;
  dao.getGuest(pageNum, pageSize);
  res.send('Hello World!');
});

guestRouter.post('/guest', function (req, res) {
  dao.postGuest();
  res.send('Got a POST request');
});

guestRouter.put('/guest', function (req, res) {
  dao.putGuest();
  res.send('Got a PUT request at /user');
});

guestRouter.delete('/guest', function (req, res) {
  dao.deleteGuest();
  res.send('Got a DELETE request at /user');
});

module.exports = guestRouter;
