// 1/29/24 Monday Codewars 8 Kyu Fundamentals - Invert Values

// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
    let newArray = [];
    array.forEach(number => {
        if(number < 0) {
            newArray.push(Math.abs(number));
        } else if(number > 0) {
            newArray.push(-number);
        } else {
            newArray.push(number);
        }
    })

    return newArray;
}



/* =============
Other Solutions
============= */
const invert = array => array.map(num => -num);