// 11/23/23 Thursday Codewars 8 Kyu Fundamentals - Count of positives / sum of negatives

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/




// 5th attempt - working
function countPositivesSumNegatives(input) {
    if(input === null || input === undefined || input.length === 0) {
        return [];
    }

    let positivesCount = 0;
    const negatives = [];
    input.forEach(element => {
        if(element > 0) {
            positivesCount += 1;
        } else if (element < 0) {
            negatives.push(element);
        }
    });
    let sumNegatives = negatives.reduce( (acc, c) => acc + c, 0);

    return [positivesCount, sumNegatives];
}




// 4th attempt
function countPositivesSumNegatives(input) {
    if(input.length === 0 || input === null || input === undefined) {
        return [];
    }

    let positivesCount = 0;
    const negatives = [];
    input.forEach(element => {
        if(element > 0) {
            positivesCount += 1;
        } else if (element < 0) {
            negatives.push(element);
        }
    });
    let sumNegatives = negatives.reduce( (acc, c) => acc + c, 0);

    return [positivesCount, sumNegatives];
}
/* Same error: you're checking input.length === 0 before checking if input is null or undefined. If input is null or undefined, trying to access the length property will result in an error, and the function won't proceed to the next conditions.

To fix this, you should first check if input is null or undefined and then check its length.
*/




// 3rd attempt
function countPositivesSumNegatives(input) {
    if(input.length === 0) {
        return [];
    }

    let positivesCount = 0;
    const negatives = [];
    input.forEach(element => {
        if(element > 0) {
            positivesCount += 1;
        } else if (element < 0) {
            negatives.push(element);
        }
    });
    let sumNegatives = negatives.reduce( (acc, c) => acc + c, 0);

    return [positivesCount, sumNegatives];
}
/* Not working: TypeError: Cannot read properties of null (reading 'length')
    at countPositivesSumNegatives (test.js:3:14)
    at Context.<anonymous> (test.js:43:18)
    at process.processImmediate (node:internal/timers:471:21)
*/





// 2nd attempt
function countPositivesSumNegatives(input) {
    if(input.length === 0 || input === null) {
        return [];
    }

    let positivesCount = 0;
    const negatives = [];
    input.forEach(element => {
        if(element > 0) {
            positivesCount += 1;
        } else if (element < 0) {
            negatives.push(element);
        }
    });
    let sumNegatives = negatives.reduce( (acc, c) => acc + c, 0);

    return [positivesCount, sumNegatives];
}
/* Passed 4, failed 1, errored 1:
TypeError: Cannot read properties of null (reading 'length')
    at countPositivesSumNegatives (test.js:3:14)
    at Context.<anonymous> (test.js:43:18)
    at process.processImmediate (node:internal/timers:471:21)
*/





// 1st attempt: wrong - need COUNT of positive numbers, not SUM
function countPositivesSumNegatives(input) {
    if(input.length === 0 || input === null) {
        return [];
    }

    const positives = [];
    const negatives = [];
    input.forEach(element => {
        if(element > 0) {
            positives.push(element);
        } else if (element < 0) {
            negatives.push(element);
        }
    });
    let sumPositives = positives.reduce( (acc, c) => acc + c, 0);
    let sumNegatives = negatives.reduce( (acc, c) => acc + c, 0);

    return [sumPositives, sumNegatives];
}




/* =============
Other Solutions
============= */