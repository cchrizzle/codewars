// 11/10/25 Monday Codewars 7 Kyu Fundamentals - V A P O R C O D E

// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

/*
ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.
Examples

"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
*/

// 4th attempt
function vaporcode(string) {
    const upperCase = string.toUpperCase();
    const splitUpperCase = upperCase.split(' ');

    const splitMapped = splitUpperCase.map(word => {
        if (word !== ' ') {
            return word.split('').join('  ');
        }
    });

    return splitMapped.join('  ').trim();
}

// 3rd attempt - not working, random string test had space at end
function vaporcode(string) {
    const upperCase = string.toUpperCase();
    const splitUpperCase = upperCase.split(' ');

    const splitMapped = splitUpperCase.map(word => {
        if (word !== ' ') {
            return word.split('').join('  '); // Two spaces between letters in words
        }
    });

    return splitMapped.join('  '); // Two spaces between words of array
}

// 2nd attempt - not working, should be spaced with 2 spaces, not just 1
function vaporcode(string) {
    const upperCase = string.toUpperCase();
    const splitUpperCase = upperCase.split(' ');

    const splitMapped = splitUpperCase.map(word => {
        if (word !== ' ') {
            return word.split('').join(' ');
        }
    });

    return splitMapped.join(' ');
}

// 1st attempt - not working bc forgot to exclude original spaces
function vaporcode(string) {
    const upperCase = string.toUpperCase();
    const splitUpperCase = upperCase.split();

    const spacedArray = splitUpperCase.map(word => word.split('').join(' '));

    return spacedArray.join(' ');
}

/* =============
Other Solutions
============= */
function vaporcode(string) {
    return string.toUpperCase().split(' ').join('').split('').join('  ');
}
