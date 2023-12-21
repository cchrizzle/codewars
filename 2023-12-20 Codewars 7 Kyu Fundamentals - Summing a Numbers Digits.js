// 12/20/23 Wednesday Codewars 7 Kyu Fundamentals - Summing a number's digits

// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be integer values.
*/




// 4th attempt
function sumDigits(number) {
    let splitNumber = Math.abs(number).toString().split('');
    let numberArray = splitNumber.map(ele => Number(ele));
    let total = numberArray.reduce( (a, c) => a + c, 0);
    return total;
}




// 3rd attempt
function sumDigits(number) {
    let splitNumber = number.toString().split('');
    let numberArray = splitNumber.map(ele => Number(ele));
    let total = numberArray.reduce( (a, c) => a + c, 0);
    return total;
}




// 2nd attempt
function sumDigits(number) {
    return number.toString().split('').map(ele => Number(ele)).reduce( (a, c) => a + c, 0);
}







// 1st attempt
function sumDigits(number) {
    return Number(number.toString().split('').reduce( (a, c) => a + c, 0));
}




/* =============
Other Solutions
============= */
const sumDigits = numberToSum => Math.abs(numberToSum)
  .toString()
  .split('')
  .map(Number)
  .reduce((acc, num) => acc + num, 0)