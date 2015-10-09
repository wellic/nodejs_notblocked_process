var cp = require('child_process');

function long(response) {
  console.log("--- 1. start long  function ---");
  var child = cp.fork('./calc');

  child.on('message', function(m) {
      console.log("--- 2. Finish: callback ---");
      // Receive results from child process
      console.log('--- 3. Received from long operation: ' + JSON.stringify(m));

      response.writeHead(200, {"Content-Type": "text/plain"});
      response.write(JSON.stringify(m));
      response.end();

      child.disconnect();
  });

  //Initial fork program
  child.send({
    query: {
       delay : 10000
    }
  });
  console.log("--- 4. Finish long function ---");
}

function fast(response) {
  console.log("--- Start fast");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello fast");
  response.end();
  console.log("--- Finish fast");
}

exports.long = long;
exports.fast = fast;

