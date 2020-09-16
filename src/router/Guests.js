const express = require('express');
const dao = require('../dao/Guests');
const guestRouter = express.Router();

guestRouter.get('/guest',async function (req, res) {
  const { pageNum, pageSize } = req.query;
  const data = await dao.getGuest(pageNum, pageSize);
  res.send(data);
});

guestRouter.post('/guest',async function (req, res) {
  await dao.postGuest(req.body);
  res.send('Got a POST request');
});

guestRouter.put('/guest',async function (req, res) {
  await dao.putGuest(req.body);
  res.send('Got a PUT request at /user');
});

guestRouter.delete('/guest',async function (req, res) {
  await dao.deleteGuest(req.body);
  res.send('Got a DELETE request at /user');
});

module.exports = guestRouter;
