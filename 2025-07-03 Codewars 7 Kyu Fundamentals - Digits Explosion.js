// 7/3/25 Thursday Codewars 7 Kyu Fundamentals - Digits explosion

// https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript

/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples

"312" should return "333122"

"102269" should return "12222666666999999999"
*/

// Implementing other solution
function explode(s) {
    const splitS = s.split('');

    const repeatArr = splitS.map(e => e.repeat(e));

    return repeatArr.join('');
}

function explode(s) {
    const numArr = [];

    for (const digit of s) {
        for (let i = 0; i < digit; i++) {
            numArr.push(digit);
        }
    }

    return numArr.join('');
}

/* =============
Other Solutions
============= */
function explode(s) {
    return s
        .split('')
        .map(e => e.repeat(e))
        .join('');
}
