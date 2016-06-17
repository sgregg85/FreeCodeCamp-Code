/* Bonfire: Search and Replace
Difficulty: 2/5

Perform a search and replace on the sentence using the arguments provided and return the new
sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to
replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.splice() String.replace() Array.join()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function myReplace(str, before, after) {
  var strAsArray = str.split(" ");
  var index = strAsArray.findIndex(function (term) {
    if (term === before) {
      return true;
    }
    return false;
  });
  var word = strAsArray[index];
  if (word.charAt(0) === word.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  strAsArray.splice(index, 1, after);
  str = strAsArray.join(' ');
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

