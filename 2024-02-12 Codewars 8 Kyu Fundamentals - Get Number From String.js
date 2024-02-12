// 2/12/24 Monday Codewars 8 Kyu Fundamentals - Get Number From String

// https://www.codewars.com/kata/57a37f3cbb99449513000cd8/train/javascript

/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
*/

// 2nd attempt
function getNumberFromString(s) {
    let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let numbers = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] in numbersArray) {
            numbers += s[i];
        }
    }

    return parseInt(numbers);
}



// 1st attempt - not working
function getNumberFromString(s) {
    let numbers = '';

    for (let i = 0; i < s.length; i++) {
        if (typeof(s[i]) === 'number') {
            numbers += s[i];
        }
    }

    return parseInt(numbers);
}





/* =============
Other Solutions
============= */
function getNumberFromString(s) {
    return +s.replace(/\D/g, "");
}
/*The unary plus operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus_())*/



// Other solutions #2
function getNumberFromString(s) {
    return Number(s.replace(/\D/g, ""));
}