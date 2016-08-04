/*
Difficulty: 3/5
Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Useful Links

Math.pow()
orbital periods

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  result = [];
  var orbPeriod;
  for (var i in arr) {
  	orbPeriod = (Math.PI * 2) * ( Math.sqrt( Math.pow(earthRadius + arr[i].avgAlt,3)/GM ) );
  	result.push({name: arr[i].name, orbitalPeriod: Math.round(orbPeriod)});
  }
  
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
