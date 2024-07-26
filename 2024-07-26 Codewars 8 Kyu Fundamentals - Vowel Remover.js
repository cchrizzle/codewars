// 7/26/24 Friday Codewars 8 Kyu Fundamentals - Vowel Remover

// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not considered a vowel for this kata
*/

// 2nd attempt
function shortcut (string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newArray = [];

    for (let letter of string) {
        if (!vowels.includes(letter)) {
            newArray.push(letter);
        }
    }

    return newArray.join('');       // Forgot to .join
}





// 1st attempt - not working
function shortcut (string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newArray = [];

    for (let letter of string) {
        if (!vowels.includes(letter)) {
            newArray.push(letter);
        }
    }

    return newArray;
}




/* =============
Other Solutions
============= */
// Solution 1: Filter
function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
}