// 10/6/24 Sunday Codewars 7 Kyu Fundamentals - Flatten and Sort an Array

// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
*/

"use strict";

function flattenAndSort(array) {
  const flatArray = array.flat(Infinity);

  return flatArray.sort((a, b) => a - b);
}




// Pseudocode

// Flatten array
    // Spread operator?
    ...array    // Not working

    // Looked up and found "flat" method
    const flatArr = array.flat(depth)


// Sort array & return
return flatArr.sort((a, b) => a - b);   // need to define sorting function when it comes to numbers





/* =============
Other Solutions
============= */
// Other solution #1
"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}