const express = require('express');
const dao = require('../dao/Comments');
const commentsRouter = express.Router();

commentsRouter.get('/comments',async function (req, res) {
  const { pageNum, pageSize } = req.query;
  const data = await dao.getComments(pageNum, pageSize);
  res.send(data);
});

commentsRouter.post('/comments',async function (req, res) {
  const doc = await dao.postComments(req.body);
  res.send(doc);
});

commentsRouter.put('/comments',async function (req, res) {
  const doc = await dao.putComments(req.body);
  res.send(doc);
});

commentsRouter.delete('/comments',async function (req, res) {
  const doc = await dao.deleteComments(req.body);
  res.send(doc);
});

module.exports = commentsRouter;
