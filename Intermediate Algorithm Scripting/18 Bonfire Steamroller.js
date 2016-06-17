/* Bonfire: Steamroller
Difficulty: 2/5

Flatten a nested array. You must account for varying levels of nesting.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/

function steamrollArray(arr) {
  function flatten(testVal) {
    if(Array.isArray(testVal)){
      for(var j in testVal){
        flatten(testVal[j]);
      }
    } else {
      flattened.push(testVal);
    }    
  }
  var flattened = [];
  for(var i in arr){
    flatten(arr[i]);
  }
  
  return flattened;
}



steamrollArray([1, [2], [3, [[4]]]]);

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

steamroller([1, [2], [3, [[4]]]]);
