var delayMS = 10000;

sleep(delayMS);

function sleep(milliSeconds) {
  console.log('--- Start long operation sleep');
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
  console.log('--- Finish long operation sleep');
}

