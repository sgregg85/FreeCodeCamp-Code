/* Bonfire: Exact Change
Difficulty: 4/5
Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function checkCashRegister(price, cash, cid) {
  var change = [];
  
  //values of denominations for calculations
  var values = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1.00], ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]];
  
  var changeDue = Number((cash - price).toFixed(2));
  var calcTemp;
  var cashInDrawer = totalCID();
  
  if(cashInDrawer < changeDue) return "Insufficient Funds";
  if(cashInDrawer === changeDue) return "Closed";
  
  //start with the largest denomination and work down
  for(var j = values.length - 1; j >= 0; j--) {
  	//use division to calculate how many of each denominations are needed to satisfy the change needed
    calcTemp = values[j][1] * Math.floor(changeDue / values[j][1]); 
    if(calcTemp > 0){ //ensure we dont use a denomination that is larger than the change needed
    	calcTemp = checkAvailableCash(j, calcTemp); //do we have enough bills in the registerer
    	//catch situations where we have enough total cash in register but not enough of a certain value to provide exact change
    	if(Number(calcTemp.toFixed(2)) === 0) return "Insufficient Funds"; 
    	change.push([values[j][0], Number(calcTemp.toFixed(2))]); //push to change array
    	changeDue = (changeDue - calcTemp).toFixed(2); //decrease the changeDue by the value we just pushed to the array
    }
  }
  
  function checkAvailableCash(index, changeNeeded){ //check if cash of a certain denomination in register is enough
    if (cid[index][1] < changeNeeded) return cid[index][1];
    else return changeNeeded;
  }
  
  
  function totalCID() { //calculate the total cash in the register
  		var cash = 0;
  		for(var i = 0; i < cid.length; i++){
  			cash += cid[i][1];
  		}
  			return Number(cash.toFixed(2));
  		}
  
   
  return change;
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]

