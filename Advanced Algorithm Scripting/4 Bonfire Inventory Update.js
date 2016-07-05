/* Bonfire: Inventory Update
Difficulty: 4/5

Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery. Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Array Object

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function updateInventory(arr1, arr2) {
	var result = [];
	var index;
	var len1 = arr1.length;
	var len2 = arr2.length;
	for(var i = 0; i < len2; i++){
		index = findItem(arr2[i][1]);
		if(index || index === 0){
			arr1[index][0] += arr2[i][0];
		}
		else {
			arr1.push(arr2[i]);
		}
	}
	arr1.sort(sortByItem);
    return arr1;
    

	function sortByItem(a, b) {
    	if (a[1] === b[1]) {
        	return 0;
    	}
    	if (a[1] < b[1]) {
        	return -1;
    	}
    	if (a[1] > b[1]) {
    		return 1;
    	}
	}
	
	function findItem(item){
		for(var j = 0; j < len1; j++) {
			if(item == arr1[j][1]) {
				return j;
			}
		}
		return undefined;
	}    

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
