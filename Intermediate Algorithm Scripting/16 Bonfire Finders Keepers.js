/* Bonfire: Finders Keepers
Difficulty 2/5

Create a function that looks through an array (first argument) and returns the first element in the
array that passes a truth test (second argument).

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.filter()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function findElement(arr, func) {
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    num = arr[i]; 
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

