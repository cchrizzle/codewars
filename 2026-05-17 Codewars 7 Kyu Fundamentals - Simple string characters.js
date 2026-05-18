// 5/17/26 Sunday Codewars 7 Kyu Fundamentals - Simple string characters

// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

The order is: uppercase letters, lowercase letters, numbers and special characters.

"*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]

More examples in the test cases.

Good luck!
*/

// 2nd attempt - working!
function solve(s) {
    let uppercases = 0;
    let lowercases = 0;
    let numbers = 0;
    let specials = 0;

    for (const char of s) {
        if (char >= 'A' && char <= 'Z') uppercases++;
        else if (char >= 'a' && char <= 'z') lowercases++;
        else if (char >= '0' && char <= '9') numbers++;
        else specials++;
    }

    return [uppercases, lowercases, numbers, specials];
}

// 1st attempt - not working, all chars are strings when iterating through
function solve(s) {
    let uppercases = 0;
    let lowercases = 0;
    let numbers = 0;
    let specialChars = 0;

    for (const char of s) {
        if (typeof char === 'number') {
            numbers++;
        } else {
            if (char >= 'A' && char <= 'Z') uppercases++;
            if (char >= 'a' && char <= 'z') lowercases++;
            else specialChars++;
        }
    }

    return [uppercases, lowercases, numbers, specialChars];
}

/* =============
Other Solutions
============= */
