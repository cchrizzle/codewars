// 3/16/24 Saturday Codewars 8 Kyu Fundamentals - Grasshopper - Combine Strings

// https://www.codewars.com/kata/55f73f66d160f1f1db000059/train/javascript

/*
Combine strings function

Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')

returns:

'James Stevens'
*/

function combineNames(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// As arrow function
const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;



/* =============
Other Solutions
============= */
const combineName = (...names) => names.join(' ');