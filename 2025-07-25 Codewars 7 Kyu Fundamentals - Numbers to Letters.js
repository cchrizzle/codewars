// 7/25/25 Friday Codewars 7 Kyu Fundamentals - Numbers to Letters

// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

function switcher(x) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');
    const reverseAlphabetArray = alphabetArray.reverse();
    const revArrayPlusSymbols = reverseAlphabetArray.concat('!', '?', ' ');

    return x
        .map(e => {
            return revArrayPlusSymbols[parseInt(e) - 1];
        })
        .join('');
}

/* =============
Other Solutions
============= */
