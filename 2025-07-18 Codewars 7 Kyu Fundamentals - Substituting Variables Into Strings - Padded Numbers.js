// 7/18/25 Codewars 7 Kyu Fundamentals - Substituting Variables Into Strings: Padded Numbers

// https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript

/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5); // should return "Value is 00005"
*/

// 2nd attempt - working!
function solution(value) {
    const valString = String(value);
    const valArray = valString.split('');

    while (valArray.length < 5) {
        valArray.unshift(0);
    }

    const paddedVal = valArray.join('');

    return `Value is ${paddedVal}`;
}

// 1st attempt - wrong, used push instead of unshift
function solution(value) {
    const valString = String(value);
    const valArray = valString.split('');

    while (valArray.length < 5) {
        valArray.push(0);
    }

    const paddedStr = valArray.join('');

    return `Value is ${paddedStr}`;
}

/* =============
Other Solutions
============= */
// Other solution #1 NEW CONCEPT - padStart, padEnd
const solution = value => 'Value is ' + value.toString().padStart(5, '0');

// Other solution #2
function solution(value) {
    return 'Value is ' + ('00000' + value).slice(-5);
}
