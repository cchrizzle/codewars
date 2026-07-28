// 7/28/26 Tuesday Codewars 7 Kyu Fundamentals - SevenAte9

// https://www.codewars.com/kata/559f44187fa851efad000087/train/javascript

/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

// Refining own attempt - replace .splice() with splitStr[i] = ''
function sevenAte9(str) {
    let splitStr = str.split('');

    for (let i = 1; i < splitStr.length; i++) {
        if (splitStr[i] === '9') {
            if (splitStr[i - 1] === '7' && splitStr[i + 1] === '7') {
                splitStr[i] = '';
            }
        }
    }

    return splitStr.join('');
}

// 2nd attempt - working
function sevenAte9(str) {
    let splitStr = str.split('');

    for (let i = 1; i < splitStr.length; i++) {
        if (splitStr[i] === '9') {
            if (splitStr[i - 1] === '7' && splitStr[i + 1] === '7') {
                splitStr.splice(i, 1, '');
            }
        }
    }

    return splitStr.join('');
}

// 1st attempt - not working, used "str" instead of "splitStr" in "if" statement
function sevenAte9(str) {
    let splitStr = str.split('');

    for (let i = 1; i < splitStr.length; i++) {
        if (str[i] === '9') {
            if (splitStr[i - 1] === '7' && splitStr[i + 1] === '7') {
                splitStr.splice(i, 1);
            }
        }
    }

    return splitStr.join('');
}

/* =============
Other Solutions
============= */
