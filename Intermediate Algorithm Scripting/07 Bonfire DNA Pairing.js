/* Bonfire: DNA Pairing
Difficulty: 2/5

The DNA strand is missing the pairing element. Match each character with the missing element and
return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.push()
String.split()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function pairElement(str) {
  var results = [];
  var basePairs = {'A':'T', 'T':'A', 'C':'G', 'G':'C'}; 
  var strand = str.split('');
  for (var char in strand) {
    results.push([strand[char], basePairs[strand[char]]]);
  }
    return results;
}

pairElement("GCG");

