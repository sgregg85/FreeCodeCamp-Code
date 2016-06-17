/* Bonfire: Arguments Optional
Difficulty: 2/5

Create a function that sums two arguments together. If only one argument is provided, return a
function that expects one additional argument and will return the sum.

For example, add(2, 3) should return 5, and add(2) should return a function that is waiting for an
argument so that var sum2And = add(2); return sum2And(3); // 5

If either argument isn't a valid number, return undefined.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Function Object
Arguments object

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/

function addTogether() {
  var numArg = arguments.length;
  
  //function to test if value passed is a number
  function numTest(num) { 
    if(Number.isInteger(num)) return true;
    else return false;
  } //end function
  
  //switch based on the number of arguments passed
  switch (numArg) {
    case 1: //if 1 argument passed
      var singleArg = arguments[0];
      if(numTest(singleArg)) {
        return function(secondArg) {
          if (numTest(secondArg)) return singleArg + secondArg;
            else return undefined;
        };
      } else {
            return undefined;
      }
      break;
      

    case 2:
      var arg1 = arguments[0];
      var arg2 = arguments[1];
      if(numTest(arg1) && numTest(arg2)) return arg1 + arg2;
      else return undefined;
      
      break;
      
    default:
      return undefined;
      
  }
    

}

addTogether(2) (3);
