var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"]     = requestHandlers.long;
handle["/long"] = requestHandlers.long;
handle["/fast"] = requestHandlers.fast;

server.start(router.route, handle);
