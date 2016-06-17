/* Bonfire: Missing letters
Difficulty: 2/5

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function fearNotLetter(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var index = alphabet.indexOf(str.charAt(0));
  var match = alphabet.slice(index, index + str.length);
  for (var i in str) {
    if (match[i] != str.charAt(i)) {
      return match[i];
    }
  }
  return undefined;
}

fearNotLetter("abce");
