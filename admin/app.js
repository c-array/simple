const http = require('http');
const https = require('https');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const path = require('path');
const sqlDb = require('./config/db');

//连接数据库并同步模型到数据库
sqlDb.sequelize.sync({force: false,logging:false}).then(function () {
    console.log("连接数据库成功！");
}).catch(function (err) {
    console.log("连接数据库失败：" + err);
});

//实例化express
const app = express();

app.use(express.static(path.join(__dirname,'report')));
app.use(express.static(path.join(__dirname,'/')));

/**
 * 解析请求体
 * */
var jsonParser = bodyParser.json({limit: 1024 * 1024 * 100, type: 'application/json'});
var urlencodedParser = bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 100,
    type: 'application/x-www-form-urlencoding'
});
app.use(jsonParser);
app.use(urlencodedParser);

//路由分发
const routes = require('./routes/index');
app.use(routes(__dirname + '/biz/controllers'));

/**
 * 监听服务端口
 * */
var httpServer = http.createServer(app);
var options = {
    key:fs.readFileSync("./sslcert/sever.key"),
    cert:fs.readFileSync("./sslcert/sever.crt")
}
var httpsServer = https.createServer(options,app);
httpServer.listen(8000)
httpsServer.listen(443);
console.log("监听" + 8000 + "端口成功！");
console.log("监听" + 443 + "端口成功！");
