const mongoose = require('mongoose');

const mongoUrl = 'mongodb://127.0.0.1:27017/test';

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const conn = mongoose.createConnection(mongoUrl, mongoConfig);

conn.on('open',()=>{
  console.log('connect success!');
});

conn.on('error',(error)=>{
    console.log(error);
});

module.exports = conn;
