/* Bonfire: Pig Latin
Difficulty: 2/5

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end
of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function translatePigLatin(str) {
  var index = str.search(/[aeiou]/i);
  if (index === 0) {
    return str + 'way';
  }
  str = str.slice(index, str.length) + str.slice(0, index) + 'ay';
  console.log(str);
  return str;
}

translatePigLatin("scram");

