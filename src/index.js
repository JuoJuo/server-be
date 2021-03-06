const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");
const multer = require("multer");
const path = require("path");

app.use(session({ secret: '0084A32228A94AC63F990E7443B49E28' }));
app.use(bodyParser.json());

app.post('/api/logoutGuest', (req, res) => {
  req.session.guestId = 0;
  req.session.cookie.maxAge = 0;
  res.status(200).send({code: 1, msg: 'success'});
});

app.use('*', (req, res, next) => {
  if (req.session.guestId || req.originalUrl === '/api/guest/login' ||
    req.originalUrl === '/api/guest/resetPassword' || (req.originalUrl === '/api/guest' && req.method === 'POST')
  ) {
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
  "/api/goods/create",
  upload.single("avatar"),
  (req, res, _next) => {
    const p = `pic/${req.file.filename}`;
    res.send({ success: true, data: p });
  }
);
// picture upload first end

app.use('/api', waiterRouter);
app.use('/api', goodsRouter);
app.use('/api', orderRouter);
app.use('/api', guestRouter);
app.use('/api', commentsRouter);
app.use('/api', managerRouter);

const port = 3023;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
