/* Bonfire: Symmetric Difference
Difficulty: 4/5

Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.

The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.reduce()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/

function sym() {
  var arrays = Array.prototype.slice.call(arguments); //convert arguments to arrays
  var diff, diffTemp, result = [];
  diff = arrays[0];
  for(var j = 1; j < arrays.length; j++){ //iterate through the arrays passed
  	diffTemp = diff;
    symDiff(diffTemp, arrays[j]); // pass the current symmetric diff and array to symDiff function
  }
  
  
  
  function symDiff(arr1, arr2) {
    diff = []; //clear the 'diff' array to prepare for new symmetric difference
    for(var i in arr1) { //iterate through first array passed
    	
      if(arr2.indexOf(arr1[i]) < 0) { //if the current value is not found in arr2
      	diff.push(arr1[i]);	      //push to 'diff' array
      }//endif
    }//end for
    for(var k in arr2) { //iterate through second array passed
      if(arr1.indexOf(arr2[k]) < 0) { //if the current value is not found in arr1
        diff.push(arr2[k]);	      //push to 'diff' array
      }
    }
  }//end func symDiff
  
function removeDuplicates () { 
  for( var x = 0; x < diff.length; x++) {
  	if(result.indexOf(diff[x]) < 0) {
  		result.push(diff[x]);
  	}
  }
}
  

  removeDuplicates();
  return result;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
