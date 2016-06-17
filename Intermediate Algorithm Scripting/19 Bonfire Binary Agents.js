/* Bonfire: Binary Agents
Difficulty: 2/5

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function binaryAgent(str) {
  var words = [];
  var wordsInBin = str.split(" ");
  for(var i in wordsInBin) {
    words.push(String.fromCharCode(parseInt(wordsInBin[i], 2)));    
  }
  
  return words.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

