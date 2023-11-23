// 11/22/23 Wednesday Codewars 7 Kyu Fundamentals - Factorial

// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here(https://www.wikiwand.com/en/Factorial).

*/




// 2nd attempt
function factorial(n) {
    if(n < 0 || n > 12) {
      throw new RangeError('Number out of range');                  // Had to set up RangeError with throw
    } else {
      let numbers = [];
      for(let i = n; i > 0; i--) {
          numbers.push(i);
      }
      return numbers
          .reduce( (acc, cur) => acc * cur, 1);
    }
  }





// 1st attempt
function factorial(n) {
  if(n < 0 || n > 12) {
    return RangeError;
  } else {
    let numbers = [];
    for(let i = n; i > 0; i--) {
        numbers.push(i);
    }
    return numbers
        .reduce( (acc, cur) => acc * cur, 1);
  }
}




/* =============
Other Solutions
============= */
function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
}
    // Factorial is "n-1" instead of just "n" because just "n" would lead to infinite recursion