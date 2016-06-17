/* Bonfire: Smallest Common Multiple
Difficulty: 2/5

Find the smallest number that is evenly divisible by all numbers in the provided range.

The range will be an array of two numbers that will not necessarily be in numerical order.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/

function smallestCommons(arr) {
  var range = [];
  var start, end;
  if (arr[0] > arr[1]) { //set the elements in the correct order
    start = arr[1];
    end = arr[0];
  } else {
    start = arr[0];
    end = arr[1];
  }
  for (start; start <= end; start++) { //create array with the range to be tested
    range.push(start);
  }
  
  return scm(range); //pass the array with the range to the 'scm' function
}

function scm (range) {
  var sum;
  //start at the highest value and work up to find scm
  for (var i = range[range.length - 1]; i < 99999999; i++) {
    sum = 0;
    //check to see if all the values in the range can be divided evenly into the number being tested
    for (var j = range[0]; j <= range[range.length - 1]; j++){
      if(i % j === 0) {
        sum += 1;
      }
    }
    if (sum === range.length) {
      return i;
    }
  }
}

smallestCommons([1,3]);

