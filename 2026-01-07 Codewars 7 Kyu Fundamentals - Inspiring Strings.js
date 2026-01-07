// 1/7/26 Wednesday Codewars 7 Kyu Fundamentals - Inspiring Strings

// https://www.codewars.com/kata/5939ab6eed348a945f0007b2/train/javascript

/*
Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.
Examples

"red white blue"  =>  "white"
"red blue gold"   =>  "gold"
*/

// 3rd attempt
function longestWord(stringofWords) {
    const wordsArray = stringofWords.split(' ');
    let longestWord;
    let longestWordCount = 0;

    wordsArray.forEach(word => {
        if (word.length >= longestWordCount) {
            longestWordCount = word.length;
            longestWord = word;
        }
    });

    return longestWord;
}

// 2nd attempt - not working, need to replace with most recent word if word lenghts are equal
function longestWord(stringofWords) {
    const wordsArray = stringofWords.split(' ');
    let longestWord;
    let longestWordCount = 0;

    wordsArray.forEach(word => {
        if (word.length > longestWordCount) {
            longestWordCount = word.length;
            longestWord = word;
        }
    });

    return longestWord;
}

// 1st attempt - not working, guess breaking it down the way I did iterated by letter instead of word?
function longestWord(stringofWords) {
    let longestWord;
    let longestWordCount = 0;

    for (const word of stringofWords) {
        if (word.length > longestWordCount) {
            longestWord = word;
        }
    }

    return longestWord;
}

/* =============
Other Solutions
============= */
// Other solution #1:
let longestWord = s => s.split(' ').reduceRight((a, b) => (b.length > a.length ? b : a));

// Other solution #2:
function longestWord(str) {
    return str
        .split(' ')
        .sort((b, a) => b.length - a.length)
        .pop();
}

// Other solution #3:
function longestWord(str) {
    return str.split(' ').reduce((acc, i) => (acc = acc.length > i.length ? acc : i), '');
}
