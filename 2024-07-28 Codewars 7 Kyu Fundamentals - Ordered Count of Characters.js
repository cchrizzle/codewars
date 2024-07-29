// 7/28/24 Sunday Codewars 7 Kyu Fundamentals - Ordered Count of Characters
function capitalizeTitle(title) {
    return title.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

/*
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

// 2nd try - not working, looked at solutions
const orderedCount = function (text) {
    if (text.length === 0) {
        return [];
    }

    let letters = {};
    for (let letter of text) {
        if (letter in letters) {
            letters[letter]++;
        } else {
            letters[letter] = 1;
        }
    }

    let lettersArray = []
    for (let [key, value] of Object.entries(letters)) {
        lettersArray.push( [key, value] );
    }

    return lettersArray;
}




// 1st try - not working answer wants pairs in arrays
const orderedCount = function (text) {
    if (text.length === 0) {
        return [];
    }

    let letters = {};

    for (let letter of text) {
        if (letter in letters) {
            letters[letter]++;
        } else {
            letters[letter] = 1;
        }
    }

    return letters;
}




/* =============
Other Solutions
============= */
// Other solutions 1 - https://www.codewars.com/kata/reviews/5c65c4373324bd000110efd0/groups/5c65cb353324bd000110f044
const orderedCount = s =>
    Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));