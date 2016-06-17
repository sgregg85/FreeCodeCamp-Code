/* Bonfire: Sum All Primes
DIfficulty: 2/5

Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime
number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible
by itself.

The provided number may not be a prime.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops Array.push()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function sumPrimes(num) {
  var prime;
  var sum = 2;
  for (var isPrime = 3; isPrime <= num; isPrime++){
    prime = true;
    for(var div = 2; div < isPrime; div++) {
      if(isPrime % div === 0) {
        prime = false;
      }
    }
    
    if (prime) {
      sum += isPrime;
    }
  }
  return sum;
}

sumPrimes(977);

