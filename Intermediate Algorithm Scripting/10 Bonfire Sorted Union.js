/* Bonfire: Sorted Union
Difficulty: 2/5

Write a function that takes two or more arrays and returns a new array of unique values in the order
of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but
with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be
sorted in numerical order.

Check the assertion tests for examples.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.reduce()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function uniteUnique(arr) {
  var results = [];
  var tempArray = [];
  
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments.length);
    tempArray = arguments[i];
    for (var j = 0; j < tempArray.length; j++) {
      if (results.indexOf(tempArray[j]) === -1) {
        results.push(tempArray[j]);
      }
    }
  }
  return results;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  return finalArray;
}

//unite([1, 2, 3], [5, 2, 1, 4], [2, 1]); //[ 1, 2, 3, 5, 4 ]
unite([1, 3, 2], [1, [5]], [2, [4]]); //[ 1, 3, 2, [ 5 ], [ 4 ] ]
