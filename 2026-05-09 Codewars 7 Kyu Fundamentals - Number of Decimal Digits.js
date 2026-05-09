// 5/9/26 Saturday Codewars 7 Kyu Fundamentals - Number of Decimal Digits

// https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript

/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
*/

function digits(n) {
    const splitNum = n.toString().split('');

    return splitNum.length;
}

/* =============
Other Solutions
============= */
