// 2024-07-01 Monday Codewars 8 Kyu Fundamentals - Check Same Case

// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

/*
Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0

Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

function sameCase(a, b) {
    let allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';

    if (!allLetters.includes(a) || !allLetters.includes(b)) {
        return -1;
    } else if ((capitalLetters.includes(a) && capitalLetters.includes(b)) || (lowerCaseLetters.includes(a) && lowerCaseLetters.includes(b))) {
        return 1;
    } else {
        return 0;
    }
}
