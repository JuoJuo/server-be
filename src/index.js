const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");

app.use(session({ secret: '0084A32228A94AC63F990E7443B49E28' }));
app.use(bodyParser.json());

const waiterRouter = require('./router/Waiter');
const goodsRouter = require('./router/Goods');
const orderRouter = require('./router/Order');
const guestRouter = require('./router/Guests');
const commentsRouter = require('./router/Comments');
const managerRouter = require('./router/Manager');

app.use(waiterRouter);
app.use(goodsRouter);
app.use(orderRouter);
app.use(guestRouter);
app.use(commentsRouter);
app.use(managerRouter);

app.listen(3023, () => {
  console.log('http://localhost:3023');
});
