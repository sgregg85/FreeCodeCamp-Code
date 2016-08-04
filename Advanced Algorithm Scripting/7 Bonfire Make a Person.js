/* Bonfire: Make a Person
Difficulty: 3/5

Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Details of the Object Model

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/

var Person = function(firstAndLast) {
  
  var name = firstAndLast.split(" ");
  
  this.getFirstName = function() {
    return name[0];
  };
  
  this.getLastName = function(){
    return name[1];
  };
  
  this.getFullName = function(){
    return name[0] + " " + name[1];
  };
  
  this.setFirstName = function(first){
    name[0] = first;
  };
  
  this.setLastName = function(last){
    name[1] = last;
  };
  
  this.setFullName = function(firstAndLast){
    name = firstAndLast.split(" ");
  };
};
var bob = new Person('Bob Ross');
bob.getFullName();
