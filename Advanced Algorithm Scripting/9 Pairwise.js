/*
Difficulty: 3/5
Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired with each other to equal 7.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Useful Links

Array.reduce()


Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function pairwise(arr, arg) {
	var array = arr;
	var sum = 0;
	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < arr.length; j++) {
			if(array[i] + array[j] == arg && i != j) {
				sum += i + j;
				array[i] = undefined;
				array[j] = undefined;
				break;
			}
		}
	}
	
	return sum;
}

pairwise([1,4,2,3,0,5], 7);
