const express = require('express');
const dao = require('../dao/Comments');
const commentsRouter = express.Router();

commentsRouter.get('/comments',async function (req, res) {
  const { pageNum, pageSize } = req.query;
  const data = await dao.getCommentsByGoods(pageNum, pageSize);
  res.send(data);
});

commentsRouter.post('/comments',async function (req, res) {
  await dao.postComments(req.body);
  res.send('Got a POST request');
});

commentsRouter.put('/comments',async function (req, res) {
  await dao.putComments(req.body);
  res.send('Got a PUT request at /user');
});

commentsRouter.delete('/comments',async function (req, res) {
  await dao.deleteComments(req.body);
  res.send('Got a DELETE request at /user');
});

module.exports = commentsRouter;
