/* Bonfire: Validate US Telephone Numbers
Difficulty: 4/5

Return true if the passed string is a valid US phone number

The user may fill out the form field any way they choose as long as it is a valid US number. The
following are all valid formats for US numbers:

555-555-5555, (555)555-5555, (555) 555-5555, 555 555 5555, 5555555555, 1 555 555 5555

For this challenge you will be presented with a string such as "800-692-7753" or "8oo-
six427676;laskdjf". Your job is to validate or reject the US phone number based on any combination
of the formats provided above. The area code is required. If the country code is provided, you must
confirm that the country code is "1". Return true if the string is a valid US phone number;
otherwise false.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/

function telephoneCheck(str) {
  var digits = [];
  var char;
  var regex = /^(\d? ?)?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d+$/gm;
  if(str.match(regex)) { //regex that matches US phone numbers
    for (var i = 0; i < str.length; i++) { //iterate through each char
      char = str.charAt(i);
      
      if(!isNaN(char) && char !== " ") { //if a number, push to digits
        digits.push(str.charAt(i));
          
        } //end if number   
        
     
    } //end for
    
    //if 11 digits, does it begin with a 1 OR if length is 10 digits
    if((digits.length === 11 && parseInt(digits[0]) === 1) || (digits.length === 10)) {
      return true;
    }  //end if 11 digits and begin with 1 or 10 digits
  }
  return false;
}



telephoneCheck("1 555)555-5555");

