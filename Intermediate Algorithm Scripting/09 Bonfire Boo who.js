/* Bonfire: Boo who
DIfficulty: 2/5

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Boolean Objects

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function booWho(bool) {
  return typeof(bool) === 'boolean';
}

booWho(null);
