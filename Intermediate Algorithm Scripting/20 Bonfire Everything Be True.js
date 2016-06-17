/* Bonfire: Everything Be True
DIfficulty: 2/5

Check if the predicate (second argument) returns truthy (defined) for all elements of a collection
(first argument).

For this, check to see if the property defined in the second argument is present on every element of
the collection.

Remember, you can access object properties through either dot notation or [] notation.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Object.hasOwnProperty()
Object.getOwnPropertyNames()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/

function truthCheck(collection, pre) {
  var times = 0;
  for(var i in collection){
    if(collection[i][pre]){
      times += 1;
    }
  }
  if(times === collection.length) {
    return true;
  } else {
    return false;
  }
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
