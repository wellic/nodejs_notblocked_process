
process.on('message', function(obj) {
  console.log('--- Start long operation');
  // Do work  (in this case just up-case the string
  console.log('--- Input vars' + JSON.stringify(obj));

  /////////////// Long operation ///////////////////
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + obj.query.delay);
  //////////////////////////////////////////////////

  console.log('--- Finish long operation');

  // Pass results back to parent process
  process.send({
    status:'finished',
    random: Math.floor(Math.random() * 11)
  });
  
});
