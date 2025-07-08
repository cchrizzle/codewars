// 7/8/25 Tuesday Codewars 8 Kyu Fundamentals - get character from ASCII Value

// https://www.codewars.com/kata/55ad04714f0b468e8200001c/train/javascript

/*
Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

65 --> 'A'
97 --> 'a'
48 --> '0
*/

function getChar(c) {
    return String.fromCharCode(c);
}

/* =============
Other Solutions
============= */
// Turning getChar into built in function
const getChar = String.fromCharCode;
/* Explanation from B1ts:
    String.fromCharCode is a function that takes 1 argument (ascii value) and returns a character, which is exactly what getChar function requires, so getChar = String.fromCharCode is simply assigning that function, creating an alias for the same function. So then calling getChar(c) is equal to calling String.fromCharCode(c).

    More details on MDN(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) page

    Use cases:
    - Aliasing other functions. For example log = console.log would allow you to get rid of typing console every time.
    - Some more advanced use cases like String.prototype.map = Array.prototype.map, that would allow you to use map on strings directly.
    */
