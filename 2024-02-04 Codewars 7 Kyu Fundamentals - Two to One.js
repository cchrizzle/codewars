// 2/4/24 Sunday Codewars 7 Kyu Fundamentals - Two to One

// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// 2nd try
function longest(s1, s2) {
    let s1AndS2 = s1 + s2;
    let uniqueLetters = new Set(s1AndS2);

    let uniqueSorted = Array.from(uniqueLetters).sort();        // Array.from() new method -- sort() automatically sorts elements in an array as strings by default; only need to define parameters when sorting numbers
    return uniqueSorted.join('')
}




// 1st try - not working
function longest(s1, s2) {
    let s1AndS2 = s1 + s2;
    let uniqueLetters = new Set(s1AndS2);

    let uniqueSorted = uniqueLetters.sort( (a, b) => a - b);
    return uniqueSorted.join('');
}




/* =============
Other Solutions
============= */
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')