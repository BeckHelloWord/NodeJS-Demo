var http = require("http");
var url = require("url");


function start(route, handle) {

    function onRequest(request, response) {

        //获取请求路径
        var pathname = url.parse(request.url).pathname;

        //排除请求ico
        if (pathname == '/favicon.ico') {
            return false;
        }

        console.log("Request for " + pathname + " received.");

        //调用路由，转发给不同的请求处理函数
        route(handle, pathname, response, request);

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;