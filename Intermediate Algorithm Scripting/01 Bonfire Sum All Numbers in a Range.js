/* Bonfire: Sum All Numbers in a Range
Difficulty: 2/5

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between
them.

The lowest number will not always come first.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function sumAll(arr) {
  var sum = 0;
  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);
  
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;
}

sumAll([1, 4]);

