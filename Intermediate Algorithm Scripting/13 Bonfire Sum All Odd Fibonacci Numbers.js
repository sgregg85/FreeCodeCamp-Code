/* Bonfire: Sum All Odd Fibonacci Numbers
Difficulty: 2/5

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a
Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number
is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under
4 are 1, 1, and 3.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function sumFibs(num) {
  var fibNums = [1,1];
  var sum = 2;
  for (var i = 2; i < num; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
    if (fibNums[i] % 2 > 0 && fibNums[i] <= num){
      sum += fibNums[i];
    }
  }
  console.log(sum);
  return sum;
}

sumFibs(4);

