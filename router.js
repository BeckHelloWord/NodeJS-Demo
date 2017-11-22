function route(handle, pathname, response, request) {

  if (typeof handle[pathname] === 'function') {
    //根据路由调用不同的处理函数
    handle[pathname](response, request);

  } else {

    console.log("No request handler found for " + pathname);
    response.writeHead(404, {
      "Content-Type": "text/plain"
    });
    response.write("404 Not found");
    response.end();

  }
}

exports.route = route;