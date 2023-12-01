// 11/30/23 Thursday Codewars 8 Kyu Fundamentals - Merge two sorted arrays into one

// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
Examples (input -> output)

* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/




// 3rd attempt
function mergeArrays(arr1, arr2) {
    let combinedArrays = new Set(arr1.concat(arr2));            // Use Set to automatically remove duplicates
    return Array.from(combinedArrays).sort((a, b) => a - b);            // Convert Set back to array and sort
}




// 2nd attempt
function mergeArrays(arr1, arr2) {
    let combinedArrays = arr1.concat(arr2);
    return combinedArrays.sort((a, b) => a - b);
}





// 1st attempt
function mergeArrays(arr1, arr2) {
    let combinedArrays = arr1.push(arr2);
    return combinedArrays.sort( (a,b) => a - b);
}




/* =============
Other Solutions
============= */
function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b)
}