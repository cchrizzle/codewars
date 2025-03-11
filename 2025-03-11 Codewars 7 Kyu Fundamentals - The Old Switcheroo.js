// 3/11/25 Codewars 7 Kyu Fundamentals - The Old Switcheroo

// https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript

/*
Write a function

vowel2index(str)

that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''

Your function should be case insensitive to the vowels.
*/

// 2nd attempt
function vowel2index(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const splitStr = str.split('');

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(splitStr[i].toLowerCase())) {
            splitStr[i] = i + 1;
        }
    }

    return splitStr.join('');
}

// 1st attempt - not working
function vowel2index(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (const letter of str) {
        if (vowels.includes(letter)) {
            letter = str.indexOf(letter) + 1;
        }
    }

    return str;
}

/* =============
Other Solutions
============= */
