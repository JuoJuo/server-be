const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");

app.use(session({ secret: 'mypwd~~' }));
app.use(bodyParser.json());

const waiterRouter = require('./router/Waiter');
const managerRouter = require('./router/Manager');
const orderRouter = require('./router/Order');
const guestRouter = require('./router/Guest1');

app.use('/waiter', waiterRouter);
app.use('/manager', managerRouter);
app.use('/order', orderRouter);
app.use('/guest', guestRouter);

app.listen(3023, () => {
  console.log('server start success');
});
