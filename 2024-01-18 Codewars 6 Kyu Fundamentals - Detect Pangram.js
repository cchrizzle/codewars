// 1/18/24 Thursday Codewars 6 Kyu Fundamentals - Detect Pangram

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/




// 3rd attempt - working
// Use "size" property to calculate size of a set, not "length"
function isPangram(string){
    let splitString = string.toLowerCase().split('');
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let palindromeCalculator = new Set();

    splitString.forEach(element => {
        if(alphabet.includes(element)) {
            palindromeCalculator.add(element)
        }
    });

    return palindromeCalculator.size === 26;        // Use "size" property for sets, not "length"
}




// 2nd attempt - not working
// Think I forgot to account for capitalization
function isPangram(string){
    let splitString = string.toLowerCase().split('');       // Trying toLowerCase() here - 5 pass 6 fail
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let palindromeCalculator = new Set();

    splitString.forEach(element => {
        // element = element.toLowerCase();        // Adding to account for capitalization - 5 pass 6 fail
        if(alphabet.includes(element)) {
            palindromeCalculator.add(element)
        }
    });

    return palindromeCalculator.length === 26;
}




// 1st attempt - not working
function isPangram(string){
    let splitString = string.split('');
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let palindromeCalculator = new Set();

    splitString.forEach(element => {
        if(alphabet.includes(element)) {
            palindromeCalculator.add(element)       // Set uses "add" method, not "push"
        }
    });

    return palindromeCalculator.length === 26;
}




/* =============
Other Solutions
============= */
function isPangram(str) {
    var alphabet = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ];
    str = str.toLowerCase();
    for (var i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true;
}