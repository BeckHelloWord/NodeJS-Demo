//主文件，入口文件
var server=require("./server"); //服务器
var router = require("./router");   //路由
var requestHandlers =require("./requestHandlers");  //请求处理中心

//不同请求，对应的不同处理函数
var handle={};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/show"]=requestHandlers.show;

server.start(router.route,handle);