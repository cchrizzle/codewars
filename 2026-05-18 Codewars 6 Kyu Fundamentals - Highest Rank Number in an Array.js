// 5/18/26 Monday Codewars 6 Kyu Fundamentals - Highest Rank Number in an Array

// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/
// 3rd attempt - working!
function highestRank(arr) {
    const numbersTable = {};

    arr.forEach(e => (numbersTable[e] = (numbersTable[e] || 0) + 1));

    let mostFreqNum = arr[0];
    let mostFreqOcc = 1;

    for (const number in numbersTable) {
        const num = Number(number);

        if (numbersTable[number] > mostFreqOcc) {
            mostFreqNum = num;
            mostFreqOcc = numbersTable[number];
        } else if (numbersTable[number] === mostFreqOcc) {
            mostFreqNum = Math.max(mostFreqNum, number);
        }
    }

    return mostFreqNum;
}

// 2nd attempt - not working, used "numbersTable[number]" instead of just "number"
function highestRank(arr) {
    let numbersTable = {};

    arr.forEach(e => {
        numbersTable[e] = (numbersTable[e] || 0) + 1;
    });

    let mostFreqNum = arr[0];
    let mostFreqOcc = 1;

    for (const number in numbersTable) {
        const num = Number(number);
        if (numbersTable[number] > mostFreqOcc) {
            mostFreqNum = num;
            mostFreqOcc = numbersTable[number];
        } else if (numbersTable[number] === mostFreqOcc) {
            mostFreqNum = Math.max(numbersTable[number], mostFreqOcc);
        }
    }

    return mostFreqNum;
}

// 1st attempt - not working, only some of the tests are passing. Other tests are returning the number as a string. Passing tests are because of Math.max, which coerces to number.
function highestRank(arr) {
    let mostFreqNum = 0;
    let mostFreqOcc = 0;

    const count = {};

    arr.forEach(e => (e in count ? count[e]++ : (count[e] = 1)));

    for (const number in count) {
        if (count[number] > mostFreqOcc) {
            mostFreqNum = number;
            mostFreqOcc = count[number];
        } else if (count[number] === mostFreqOcc) {
            mostFreqNum = Math.max(mostFreqNum, number);
        }
    }

    return mostFreqNum;
}

/* =============
Other Solutions
============= */
