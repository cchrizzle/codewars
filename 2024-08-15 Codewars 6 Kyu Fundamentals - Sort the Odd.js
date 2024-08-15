// 8/15/24 Thursday Codewars 6 Kyu Fundamentals - Sort the Odd

// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

/*
Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// Redid solution with .pop() since comments on other solution mentioned .shift()'s time intensiveness
function sortArray(array) {
    let oddNumbers = array.filter(number => number % 2 !== 0);
    let sortedOddNumbers = oddNumbers.sort((a, b) => b - a);

    let finalArray = array.map(element => element % 2 !== 0 ? sortedOddNumbers.pop() : element);

    return finalArray;
}






// 1st solution - working but redid above
function sortArray(array) {
    let oddNumbers = array.filter(number => number % 2 !== 0);
    let sortedOddNumbers = oddNumbers.sort((a, b) => a - b);

    let finalArray = array.map(element => element % 2 !== 0 ? sortedOddNumbers.shift() : element);

    return finalArray;
}




/* =============
Other Solutions
============= */