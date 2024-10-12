// 10/12/24 Saturday Codewars 7 Kyu Fundamentals - Smallest Value Of An Array

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/




// 3rd attempt - working
function min(arr, toReturn) {
    const sortedArr = [...arr].sort((a, b) => a - b);   // need to create shallow copy of sortedArr since sorting will modify arr

    const lowestVal = sortedArr[0];

    if (toReturn === 'value') {
        return lowestVal;
    }
    if (toReturn === 'index') {
        return arr.indexOf(lowestVal)
    }
}





// 2nd attempt - not working
function min(arr, toReturn) {
    const sortedArr = arr.sort((a, b) => a - b);

    let lowestVal = sortedArr[0]

    if (toReturn === 'value') {
        return lowestVal;
    }
    if (toReturn === 'index') {
        return sortedArr.indexOf(lowestVal)
    }

}





// 1st attempt - not working - think I need to put sortedArr.indexOf()
function min(arr, toReturn) {
    const sortedArr = arr.sort((a, b) => a - b);

    let lowestVal = sortedArr[0]

    if (toReturn === 'value') {
        return lowestVal;
    }
    if (toReturn === 'index') {
        return indexOf(lowestVal)
    }

}


// Find the lowest value in array
    // Sort array and pull first element
    // Will either return value or index of element from original array

// Return either the value or index depending on what is given as parameter - 'value' or 'index'


// Array will alwyas have at least one number


min([1, 2, 3], value) => 1
min([1, 2, 3], index) => 0

min([2, 6, 1], index) => 2


/* =============
Other Solutions
============= */
// Other solutions - Math.min
function min( array, outer ) {
    return outer === 'index' ? array.indexOf(Math.min(...array)) : Math.min(...array)
}