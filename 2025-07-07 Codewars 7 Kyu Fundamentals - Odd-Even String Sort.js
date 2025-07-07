// 7/7/25 Monday Codewars 7 Kyu Fundamentals - Odd-Even String Sort

// https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript

/*
Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
Examples

input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357

Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
Odd indices are 1, 3, 5, 7, so the second group is "oeas".
And the final string to return is "Cdwr oeas".
Notes

Tested strings are at least 8 characters long.
*/

function sortMyString(S) {
    let evenLetters = '';
    let oddLetters = '';

    const splitS = S.split('');

    for (let i = 0; i < splitS.length; i++) {
        if (i % 2 === 0) {
            evenLetters += splitS[i];
        } else {
            oddLetters += splitS[i];
        }
    }

    return `${evenLetters} ${oddLetters}`;
}

/* =============
Other Solutions
============= */
// Other solution: reduce
const sortMyString = arr =>
    [...arr].reduce(
        (str, x, i) => {
            str[i % 2] += x;
            return str;
        },
        ['', '']
    ).join` `;
