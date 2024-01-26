// 1/23/24 Tuesday Codewars 8 Kyu Fundamentals - Find the Position!

// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript

/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/

function position(letter){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let alphabetArray = alphabet.split('');

    return `Position of alphabet: ${alphabetArray.indexOf(letter) + 1}`;
}



/* =============
Other Solutions
============= */
// Didn't need to split alphabet
function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}