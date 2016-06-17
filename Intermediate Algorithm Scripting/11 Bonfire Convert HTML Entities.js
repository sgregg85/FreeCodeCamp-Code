/* Bonfire: Convert HTML Entities
Difficulty: 2/5

Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their
corresponding HTML entities.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp HTML Entities

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/

function convertHTML(str) {
  var htmlChars = {'&':'&amp;',
                   '<':'&lt;',
                   '>':'&gt;',
                   '"':'&quot;',
                   "'":'&apos;'
                  };
  var result = str.replace(/[&<>'"]/g, function (match) {
    
    return htmlChars[match];
  });
  return result;
}

convertHTML("Dolce & Gabbana");
