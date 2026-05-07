// 5/7/26 Thursday Codewars 7 Kyu Fundamentals - Find all occurrences of an element in an array

// https://www.codewars.com/kata/59a9919107157a45220000e1/train/javascript

/*
Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.

Example:

findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
*/

function findAll(array, n) {
    const indices = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            indices.push(i);
        }
    }

    return indices;
}

/* =============
Other Solutions
============= */
const findAll = (array, n) => {
    let a = [];

    array.forEach((e, i) => {
        if (e === n) {
            a.push(i);
        }
    });

    return a;
};
