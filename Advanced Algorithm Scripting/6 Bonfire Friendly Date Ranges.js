/*Bonfire: Friendly Date Ranges
Difficulty: 4/5

Implement a way of converting two dates into a more friendly date range that could be presented to a user.

It must not show any redundant information in the date range.

For example, if the year and month are the same then only the day range should be displayed.

Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be omitted.

Input date is formatted as YYYY-MM-DD

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.split()
String.substr()
parseInt()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/


function makeFriendlyDates(arr) {
	var startDate = [Number(arr[0].substr(0,4)), Number(arr[0].substr(5,2)), Number(arr[0].substr(8,2))];
	var endDate = [Number(arr[1].substr(0,4)), Number(arr[1].substr(5,2)), Number(arr[1].substr(8,2))];
	var startDateObj = new Date(startDate); //create date object using start date
	var endDateObj = new Date(endDate); //create date object using end date
	var friendlyStartDate = friendlyDate(startDate); //format start date
	var friendlyEndDate = friendlyDate(endDate); //format end date
	var diff = endDateObj - startDateObj; //calculate the difference between the dates in milliseconds
	
	
	if(diff <= 86400000) { // 1 day or less
		return [friendlyStartDate[0] + " " + friendlyStartDate[1] + friendlyStartDate[2] + ", " + friendlyStartDate[3]];
	}
	

	if(diff <= 2678400000) { //1 mth or less
		return [friendlyStartDate[0] + " " + friendlyStartDate[1] + friendlyStartDate[2], friendlyEndDate[1] + friendlyEndDate[2]];
	}
	
	if(diff < 31536000000) { // less than 1 yr
		if(friendlyStartDate[3] != 2016) { //if start year is not 2016
			return [friendlyStartDate[0] + " " + friendlyStartDate[1] + friendlyStartDate[2] + ", " + friendlyStartDate[3], friendlyEndDate[0] + " " + friendlyEndDate[1] + friendlyEndDate[2]];
		}
		return [friendlyStartDate[0] + " " + friendlyStartDate[1] + friendlyStartDate[2], friendlyEndDate[0] + " " + friendlyEndDate[1] + friendlyEndDate[2]];
	}

	if(diff >= 31536000000) { //1 yr or more
		return [friendlyStartDate[0] + " " + friendlyStartDate[1] + friendlyStartDate[2] + ", " + friendlyStartDate[3], friendlyEndDate[0] + " " + friendlyEndDate[1] + friendlyEndDate[2] + ", " + friendlyEndDate[3]];
	}
}

//return an array containing the date in a friendly format, [0]=month, [1]=day, [2]=suffix, [3]=year
function friendlyDate(date){
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var suffix = findSuffix(date[2]);
	var month = months[date[1] - 1];
	
	return [month, date[2], suffix, date[0] ];
}

//find the suffix based on the day of the month
function findSuffix(day) {
	if (day === 1 || day === 21 || day === 31) return 'st';
	else if (day === 2 || day === 22) return 'nd';
	else if (day === 3 || day === 23) return 'rd';
	else return 'th';
}

makeFriendlyDates(["2022-09-05", "2023-09-05"]);
