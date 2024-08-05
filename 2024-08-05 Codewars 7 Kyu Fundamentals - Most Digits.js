// 8/5/24 Monday Codewars 7 Kyu Fundamentals - Most Digits

// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array) {
  let longestLength = 0;
  let longestNum;

  array.forEach((num) => {
    let numString = num.toString();

    if (numString.length > longestLength) {
      longestLength = numString.length;
      longestNum = num;
    }
  });

  return longestNum;
}

/* =============
Other Solutions
============= */
// Other solutions 1 - reduce
const findLongest = (l) =>
  l.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
