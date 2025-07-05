// 7/5/25 Saturday Codewars 7 Kyu Fundamentals - Alphabet symmetry

// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]

See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!

If you like this Kata, please try:

Last digit symmetry

Alternate capitalization
*/

// 2nd attempt - working!
function solve(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const arrCount = arr.map(word => {
        let count = 0;

        for (let i = 0; i < word.length; i++) {
            const lowercaseLetter = word[i].toLowerCase();
            const alphabetIndex = alphabet.indexOf(lowercaseLetter);
            if (i === alphabetIndex) {
                count++;
            }
        }
        return count;
    });

    return arrCount;
}

// 1st attempt - not working
// Used charCodeAt() instead of indexOf() & returned inside for loop
function solve(arr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const arrCount = arr.map(e => {
        let count = 0;
        for (let i = 0; i < e.length; i++) {
            const lowerCaseLetter = e[i].toLowerCase();
            if (i === alphabet.charCodeAt(lowerCaseLetter)) {
                count++;
            }
            return count;
        }
    });

    return arrCount;
}

/* =============
Other Solutions
============= */
