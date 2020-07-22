// console.log('hello world');
const express = require('express'); // 后端开发框架
const fs = require('fs') //文件系统 node 内置
const path = require('path');
const app = express();
const apiMocker = require('mocker-api')
// localhost 127.0.0.1:8080
// 阿里云 IP : 3306 mysql  :27017 mongodb


app.get('/', (req, res) => {

    //   res.end('hello world');
  fs.createReadStream('./home.html').pipe(res);
})

apiMocker(app, path.resolve('./mocker/mocker.js'))

app.listen(1314); //监听某个端口
