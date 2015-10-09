var exec = require("child_process").exec;

function long(response) {
  console.log(" --- 1. Start: long function ---");

  exec("node calc.js",
    { timeout: 0 },
    function (error, stdout, stderr) {
      console.log(" --- 2. Finish: callback ---");
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(stdout);
      response.end();
    });
  console.log(" --- 3. Finish:  function ---");
}

function fast(response) {
  console.log("Request handler 'test' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello test");
  response.end();
}

exports.long = long;
exports.fast = fast;