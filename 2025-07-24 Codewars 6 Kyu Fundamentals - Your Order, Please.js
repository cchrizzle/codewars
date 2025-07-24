// 7/24/25 Codewars 6 Kyu Fundamentals - Your Order, Please

// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
// 2nd attempt - working!
function order(words) {
    if (!words) return '';

    const splitWords = words.split(' ');
    const wordNumbers = splitWords.map(word => {
        const mapSplitWord = word.split('');

        for (const e of mapSplitWord) {
            if (!isNaN(e)) {
                return Number(e); // The number was still a string in first attempt
            }
        }
    });

    const sentenceArray = [];
    splitWords.forEach((word, i) => {
        sentenceArray[wordNumbers[i] - 1] = word;
    });

    return sentenceArray.join(' ');
}

// 1st attempt - not working, checking for if e is a number is wrong & forgot to do "wordNumbers[i]-1"
function order(words) {
    const splitWords = words.split(' ');
    const wordNumbers = splitWords.map(word => {
        const splitWordMap = word.split('');

        for (const e of splitWordMap) {
            if (typeof e === 'number') {
                return e;
            }
        }
    });

    const sentenceArray = [];
    splitWords.forEach((word, i) => {
        sentenceArray[wordNumbers[i]] = word;
    });

    return sentenceArray.join(' ');
}

/* =============
Other Solutions
============= */
// Nested for loop but making note of using indexOf() to check if an element exists
function order(words) {
    var array = words.split(' ');
    var sortedArray = [];
    for (i = 0; i <= array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
            }
        }
    }
    return sortedArray.join(' ');
}
