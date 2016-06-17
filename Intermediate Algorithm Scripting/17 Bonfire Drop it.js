/* Bonfire: Drop it
Difficulty: 2/5
Drop the elements of an array (first argument), starting from the front, until the predicate (second
argument) returns true.
Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Arguments object
Array.shift()


Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/

function dropElements(arr, func) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    if(!func(arr[0])) {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
