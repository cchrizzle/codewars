// 8/2/26 Sunday Codewars 7 Kyu Fundamentals - Split In Parts

// https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript

/*
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

Split the below string into other strings of size #3

'supercalifragilisticexpialidocious'

Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'

Assumptions:

String length is always greater than 0
String has no spaces
Size is always positive
*/

// Making code more efficient
var splitInParts = function (s, partLength) {
    let newStr = '';

    for (let i = 0; i < s.length; i++) {
        newStr += s[i];
        if ((i + 1) % partLength === 0) {
            newStr += ' ';
        }
    }

    return newStr.trim();
};

// 4th attempt - working!!
var splitInParts = function (s, partLength) {
    let newStr = '';
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        newStr += s[i];
        counter++;

        if (counter % partLength === 0) {
            newStr += ' ';
            counter = 0;
        }
    }

    return newStr.trim();
};

// 3rd attempt - not working, spaces are counted in .length which is making the sections 1 less than they should be
var splitInParts = function (s, partLength) {
    let newStr = '';

    for (let i = 0; i < s.length; i++) {
        newStr += s[i];

        if (newStr.length % partLength === 0) {
            newStr += ' ';
        }
    }

    return newStr.trim();
};

// 2nd attempt - not working, I need to use newStr.length % partLength for condtion instead
var splitInParts = function (s, partLength) {
    let newStr = '';

    for (let i = 0; i < s.length; i++) {
        newStr += s[i];

        if (i % partLength === 0) {
            newStr += ' ';
        }
    }

    return newStr.trim();
};

// 1st attempt - not working, first condition of while loop is always true so it's just pushing spaces
var splitInParts = function (s, partLength) {
    let count = 0;
    let newStr = '';

    for (const letter of s) {
        while (count % partLength !== 0) {
            newStr += letter;
            count++;
        }

        newStr += ' ';
    }

    return newStr;
};
/* =============
Other Solutions
============= */
