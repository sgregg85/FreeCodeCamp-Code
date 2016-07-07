/* Bonfire: No repeats please
Difficulty: 4/5

Return the number of total permutations of the provided string that don't have repeated consecutive letters.

For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Permutations
RegExp

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/

function permAlone(str) {
	var result = [];
	var permutation = permutationArr(str); //find all the permutations of input
	for(var x in permutation) {
		permutation[x] = permutation[x].replace(/[,]/g, ""); //remove all the commas from the permutations
		if (!permutation[x].match(/(.)\1/)) { //if there are any repeated characters
			result.push(permutation[x]);
		}
	}

	function permutationArr(chars) { //find permutations using Heap's algorithm
		var arr = (chars + '').split('');
  		var permutations = [];   

  		function swap(a, b) {
    		var tmp = arr[a];
    		arr[a] = arr[b];
    		arr[b] = tmp;
  		}

  		function generate(n) {
    		if (n == 1) {
      			permutations.push(arr.join());
    		} else {
      			for (var i = 0; i != n; ++i) {
        			generate(n - 1);
        			swap(n % 2 ? 0 : i, n - 1);
      			}
    		}
  		}

  		generate(arr.length);
  		return permutations;
	} 
	return result.length;
}

permAlone('abcdefa'); 
