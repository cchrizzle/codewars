// 10/8/24 Tuesday Codewars 6 Kyu Fundamentals - Duplicate Encoder

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// ignore capitalization

// hash map


// iterate through string and add chars to hash map
    // if 






function duplicateEncode(word){
    let letters = {};

    for (let letter of word.toLowerCase()) {
        if (letter in letters) {
            letters[letter] += 1;
        } else {
            letters[letter] = 1;
        }
    }

    let newString = ''
    for (let letter of word.toLowerCase()) {
        if (letters[letter] === 1) {
            newString += '('
        } else {
            newString += ')'
        }
    }

    return newString;
}



(duplicateEncode('din'), '(((')
(duplicateEncode('recede'), "()()()")
(duplicateEncode('Success', ")())())"))




// Frequency map
// Speak more and enunciate
// Pseudocode: work on thoroughness


// Revising code
function duplicateEncode(word){
    const letters = {};       // changed from "let"

    for (let letter of word.toLowerCase()) {
        if (letter in letters) {
            letters[letter] += 1;
        } else {
            letters[letter] = 1;
        }
    }

    let newString = ''
    for (let letter of word.toLowerCase()) {
        if (letters[letter] === 1) {
            newString += '('
        } else {
            newString += ')'
        }
    }

    return newString;
}

/* =============
Other Solutions
============= */