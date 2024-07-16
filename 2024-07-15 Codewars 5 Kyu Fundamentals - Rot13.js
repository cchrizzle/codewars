// 7/15/24 Monday Codewars 5 Kyu Fundamentals - Rot13
function capitalizeTitle(title) {
    return title.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/



// Note from other solutions: "Don't do str += something in loop, because every time the whole string is copied, and your algorithm becomes O(N**2). It's better to create an array and then join() it to a string."




// 3rd attempt implementing code above - working
function rot13(message){
    let replacements = {
        'a': 'n',
        'b': 'o',
        'c': 'p',
        'd': 'q',
        'e': 'r',
        'f': 's',
        'g': 't',
        'h': 'u',
        'i': 'v',
        'j': 'w',
        'k': 'x',
        'l': 'y',
        'm': 'z',
        'n': 'a',
        'o': 'b',
        'p': 'c',
        'q': 'd',
        'r': 'e',
        's': 'f',
        't': 'g',
        'u': 'h',
        'v': 'i',
        'w': 'j',
        'x': 'k',
        'y': 'l',
        'z': 'm',
        'A': 'N',
        'B': 'O',
        'C': 'P',
        'D': 'Q',
        'E': 'R',
        'F': 'S',
        'G': 'T',
        'H': 'U',
        'I': 'V',
        'J': 'W',
        'K': 'X',
        'L': 'Y',
        'M': 'Z',
        'N': 'A',
        'O': 'B',
        'P': 'C',
        'Q': 'D',
        'R': 'E',
        'S': 'F',
        'T': 'G',
        'U': 'H',
        'V': 'I',
        'W': 'J',
        'X': 'K',
        'Y': 'L',
        'Z': 'M'
    }

    let decipher = [];

    for (let letter of message) {
        if (replacements.hasOwnProperty(letter)) {
            decipher.push(replacements[letter]);
        }
        else {
            decipher.push(letter);
        }
    }

    return decipher.join('');
}





// 2nd attempt - working
function rot13(message){
    let replacements = {        // Just listing both upper and lowercase letters to make explicit
        'a': 'n',
        'b': 'o',
        'c': 'p',
        'd': 'q',
        'e': 'r',
        'f': 's',
        'g': 't',
        'h': 'u',
        'i': 'v',
        'j': 'w',
        'k': 'x',
        'l': 'y',
        'm': 'z',
        'n': 'a',
        'o': 'b',
        'p': 'c',
        'q': 'd',
        'r': 'e',
        's': 'f',
        't': 'g',
        'u': 'h',
        'v': 'i',
        'w': 'j',
        'x': 'k',
        'y': 'l',
        'z': 'm',
        'A': 'N',
        'B': 'O',
        'C': 'P',
        'D': 'Q',
        'E': 'R',
        'F': 'S',
        'G': 'T',
        'H': 'U',
        'I': 'V',
        'J': 'W',
        'K': 'X',
        'L': 'Y',
        'M': 'Z',
        'N': 'A',
        'O': 'B',
        'P': 'C',
        'Q': 'D',
        'R': 'E',
        'S': 'F',
        'T': 'G',
        'U': 'H',
        'V': 'I',
        'W': 'J',
        'X': 'K',
        'Y': 'L',
        'Z': 'M'
    }

    let decipher = '';

    for (let letter of message) {       // Used "in" instead of "of" in previous attempt
        if (replacements.hasOwnProperty(letter)) {      // Start using this method more
            decipher += replacements[letter];
        }
        else {
            decipher += letter;
        }
    }

    return decipher;
}




// 1st attempt - not working
function rot13(message){
    let replacements = {
        'a': 'n',
        'b': 'o',
        'c': 'p',
        'd': 'q',
        'e': 'r',
        'f': 's',
        'g': 't',
        'h': 'u',
        'i': 'v',
        'j': 'w',
        'k': 'x',
        'l': 'y',
        'm': 'z',
        'n': 'a',
        'o': 'b',
        'p': 'c',
        'q': 'd',
        'r': 'e',
        's': 'f',
        't': 'g',
        'u': 'h',
        'v': 'i',
        'w': 'j',
        'x': 'k',
        'y': 'l',
        'z': 'm'
    }

    let decipher = '';

    for (let letter in message) {
        if (letter.toLowerCase() in replacements) {
            decipher += replacements[letter];
        }
        else {
            decipher += letter;
        }
    }

    return decipher;
}




/* =============
Other Solutions
============= */
// Other solution 1 - regex (noted because of flexibility, can easily change number of characters down to replace without having to redo each letter)
function rot13(message) {
    var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}

