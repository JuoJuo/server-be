const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");
const multer = require("multer");
const path = require("path");

app.use(session({ secret: '0084A32228A94AC63F990E7443B49E28002' }));
app.use(bodyParser.json());

app.post('/logout', (req, res) => {
  req.session.loginId = 0;
  req.session.cookie.maxAge = 0;
  res.status(200).send({code: 1, msg: 'success'});
});

app.use('*', (req, res, next) => {
  if (req.session.loginId || req.originalUrl === '/loginManager' ||
    req.originalUrl === '/loginWaiter') {
    next();
  } else {
    res.status(401).send({code: -1, msg: 'please login first'});
  }
});

const waiterRouter = require('./router/Waiter');
const goodsRouter = require('./router/Goods');
const orderRouter = require('./router/Order');
const guestRouter = require('./router/Guests');
const commentsRouter = require('./router/Comments');
const managerRouter = require('./router/Manager');


// picture upload first begin
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public", "pic"),
  filename(_req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
app.use(express.static(path.join(__dirname, "public")));
app.post(
  "/goods/create",
  upload.single("avatar"),
  (req, res, _next) => {
    const p = `pic/${req.file.filename}`;
    res.send({ success: true, data: p });
  }
);
// picture upload first end

app.use(waiterRouter);
app.use(goodsRouter);
app.use(orderRouter);
app.use(guestRouter);
app.use(commentsRouter);
app.use(managerRouter);

const port = 3024;

app.listen(3024, () => {
  console.log(`http://localhost:${port}`);
});
