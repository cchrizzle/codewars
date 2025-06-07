// 6/6/25 Friday Codewars 8 Kyu Fundamentals - Multiply the Number

// https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)
*/

// 4th attempt - working!
function multiply(number) {
    const absVal = Math.abs(number);
    const numStringLength = absVal.toString().length;

    return number * Math.pow(5, numStringLength);
}

// 3rd attempt - not working, negatives will throw off length
function multiply(number) {
    const numStringLength = number.toString().length;

    return number * Math.pow(5, numStringLength);
}

// 2nd attempt - not working, .length doesn't work on number
function multiply(number) {
    return number * Math.pow(number, number.length);
}

// 1st attempt - wrong, misread prompt
function multiply(number) {
    const base = number / 5;

    return Math.log(5, base);
}

/* =============
Other Solutions
============= */
