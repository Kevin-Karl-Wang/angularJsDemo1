/**
 * Created by kevinWang on 2016/6/27.
 */
var http = require("http");
http.createServer(function (request, response) {
    //发送HTTP头部
    //http状态值
    //内容类型 text/plain
    response.writeHead(200, {'Content-Type': ' text/plain'});

    //发送响应数据
    response.end('Hello node.js/n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
