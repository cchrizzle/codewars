// 2/6/24 Tuesday Codewars 8 Kyu Fundamentals - Sum The Strings

// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

Notes:

    If either input is an empty string, consider it as zero.

    Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
*/

function sumStr(a,b) {
    if(a === '') {
        a = 0;
    } else if(b === '') {
        b = 0;
    }

    let result = Number(a) + Number(b);

    return result.toString();
}




/* =============
Other Solutions
============= */
function sumStr(a,b) {
    return String(Number(a)+Number(b));
}

// Other solution #2
function sumStr(a,b) {
    return (+a+ +b)+''  
}