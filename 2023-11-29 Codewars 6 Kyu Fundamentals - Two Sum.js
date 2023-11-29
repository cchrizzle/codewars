// 11/29/23 Wednesday Codewars 6 Kyu Fundamentals - Two Sum

// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/




// 4th attempt - working
function twoSum(numbers, target) {
    let indices = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}




// 3rd attempt
function twoSum(numbers, target) {
    let indices = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) { 
            if(numbers[i] + numbers[j] === target) {
                indices.push([i, j]);
            }
        }
    }
    return indices;
}




// 34d attempt
function twoSum(numbers, target) {
    let indices = [];
    // testing whether numbers in array equal target
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {                   // Changed "j = 0" to "j = 1 + i": avoids duplicate pairs and ensures indices are different
            // checking whether adds up to target
            if(numbers[i] + numbers[j] === target) {
                indices.push([i, j]);                                    // Use "i" and "j" in array
            }
        }
    }
    if(indices.length > 0) {                    // Handling for instances of no pairs of numbers in array that add up to element
        return indices;
    } else {
        return null;
    }
}




// 2nd attempt
function twoSum(numbers, target) {
    let indices = [];
    // testing whether numbers in array equal target
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {                   // Changed "j = 0" to "j = 1 + i": avoids duplicate pairs and ensures indices are different
            // checking whether adds up to target
            if(numbers[i] + numbers[j] === target) {
                indices.push([i, j]);                                    // Use "i" and "j" in array
            }
        }
    }
    return indices;
}
/* Not working:
Fixed texts:
    for target sum = 4 and numbers = [1, 2, 3]
    array[0,2] = undefined, array[undefined] = undefined
    undefined + undefined = NaN
    : expected NaN to equal 4

Random tests:
    for target sum = -381 and numbers = [-24, 704, -746, 183, -463, -364, 714, -993, 767, 695, 755, -703, 352, 370, -914, 997, 248, -668, -751, -812]
    array[13,18] = undefined, array[undefined] = undefined
    undefined + undefined = NaN
    : expected NaN to equal -381
*/




// 1st attempt
function twoSum(numbers, target) {
    let indices = [];
    // testing whether numbers in array equal target
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            // checking whether adds up to target
            if(numbers[i] + numbers[j] === target) {
                indices.push(i, j);
            }
        }
    }
    return indices;
}
// Not working




/* =============
Other Solutions
============= */