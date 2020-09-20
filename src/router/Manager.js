const express = require('express');
const dao = require('../dao/Manager');
const managerRouter = express.Router();

managerRouter.post('/loginManager',async function (req, res) {
  const rs = await dao.findOne(req.body);

  if (rs.length !== 0) {
    req.session.loginId = rs[0]._id;
    req.session.cookie.maxAge = 2 * 60 * 60 * 1000;

    res.status(200).send({code: 1, data: rs[0], msg: 'success'});
  } else {
    res.status(500).send({code: -1, msg: 'UserName or Password wrong!'});
  }
});

managerRouter.get('/add',async function (req, res) {
  const data = await dao.add();
  res.send(data);
});

module.exports = managerRouter;
