/* Bonfire: Spinal Tap Case
Difficulty: 2/5

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp String.replace()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function spinalCase(str) {
  var result = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  result = result.replace(/[\s_]/g, "-").toLowerCase();
  return result;
}

spinalCase('thisIsSpinalTap');

