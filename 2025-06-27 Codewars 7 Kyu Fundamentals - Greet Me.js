// 6/27/2025 Codewars 7 Kyu Fundamentals - Greet Me

// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

const greet = function (name) {
    const firstLetter = name.slice(0, 1).toUpperCase();
    const restOfName = name.slice(1).toLowerCase();

    return `Hello ${firstLetter}${restOfName}!`;
};

/* =============
Other Solutions
============= */
// charAt() method
const greet = function (name) {
    const firstLetter = charAt(0).toUpperCase();
    const restOfName = name.slice(1).toLowerCase();

    return `Hello ${firstLetter}${restOfName}!`;
};
