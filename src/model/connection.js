const mongoose = require('mongoose');

//创建对数据库的连接
const conn = mongoose.createConnection(
    'mongodb://127.0.0.1:27017/test',
    {
        useNewUrlParser: true, //使用新的url解析器
        useUnifiedTopology: true
    }
);
conn.on('open',()=>{
    console.log('当mongoose成功连接数据库之后会打印这个日志')
});
conn.on('error',(error)=>{
    console.log('如果说连接失败了，会把失败的原因传递给',error)
});
module.exports = conn;
