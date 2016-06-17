/* Bonfire: Roman Numeral Converter
Difficulty: 2/5

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.splice() Array.indexOf() Array.join()

Code by Steve Gregg
https://github.com/sgregg85
sgregg85@gmail.com
https://www.freecodecamp.com/sgregg85
*/

function convertToRoman(num) {
  var s = "";
    while (num >= 1000) {
        s += "M";
        num -= 1000;        
    }
    while (num >= 900) {
        s += "CM";
        num -= 900;
    }
    while (num >= 500) {
        s += "D";
        num -= 500;
    }
    while (num >= 400) {
        s += "CD";
        num -= 400;
    }
    while (num >= 100) {
        s += "C";
        num -= 100;
    }
    while (num >= 90) {
        s += "XC";
        num -= 90;
    }
    while (num >= 50) {
        s += "L";
        num -= 50;
    }
    while (num >= 40) {
        s += "XL";
        num -= 40;
    }
    while (num >= 10) {
        s += "X";
        num -= 10;
    }
    while (num >= 9) {
        s += "IX";
        num -= 9;
    }
    while (num >= 5) {
        s += "V";
        num -= 5;
    }
    while (num >= 4) {
        s += "IV";
        num -= 4;
    }
    while (num >= 1) {
        s += "I";
        num -= 1;
    }    
    return s;

}

convertToRoman(36);

