// 11/25/23 Saturday Codewars 7 Kyu Fundamentals - Simple Fun #176: Reverse Letter

// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

/*
Task

Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string

*/




// 6th attempt - working
function reverseLetter(str) {
    let reverseString = '';
    for(let i = str.length - 1; i >= 0; i--) {
        if(str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z') {
            reverseString += str[i];
        }
    }

    return reverseString;
}




// 5th attempt - not working, returning string but not reversed
function reverseLetter(str) {
    let reverseString = '';
    let strSplit = str.split('');
    strSplit.forEach(character => {
        if(character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {
            reverseString += character;
        }
    })
    return reverseString;
}




// 4th attempt
function reverseLetter(str) {
    const letters = [];
    let splitString = str.split('');
    splitString.forEach(character => {
        if(typeof character === 'string') {
            letters.push(character);
        }
    })
    return letters
        .reverse()
        .join('');
}




// 3rd attempt - trying to use unshift to reverse order but didn't work, still adding symbols
function reverseLetter(str) {
    const letters = [];
    let splitString = str.split('');
    splitString.forEach(character => {
        if(typeof character === 'string') {
            letters.unshift(character);
        }
    })
    return letters
        .join('');
}
// Not working: "expected 'n?o35rtlu' to equal 'nortlu'"




// 2nd attempt
function reverseLetter(str) {
    const letters = [];
    let splitString = str.split('');
    splitString.forEach(character => {
        if(typeof character === 'string') {
            letters.push(character);
        }
    })
    return letters
        .join('');
}
// Not working: "expected 'krishan' to equal 'nahsirk'"




// 1st attempt
function reverseLetter(str) {
    const letters = [];
    str.forEach(character => {
        if(typeof character === 'string') {
            letters.push(character);
        }
    });
    return letters
        .join('');
}




/* =============
Other Solutions
============= */