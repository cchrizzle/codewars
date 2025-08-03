// 8/3/25 Sunday Codewars 8 Kyu Fundamentals - Simple Comparison?

// https://www.codewars.com/kata/57f6ecdfcca6e045d2001207/train/javascript

/*
Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
*/

function add(a, b) {
    if (typeof a === typeof b) {
        return a === b;
    } else if (typeof a === 'string') {
        return a === b + '';
    } else {
        return a + '' === b;
    }
}

/* =============
Other Solutions
============= */
// OMG *facepalm*
function add(a, b) {
    return a == b;
}
