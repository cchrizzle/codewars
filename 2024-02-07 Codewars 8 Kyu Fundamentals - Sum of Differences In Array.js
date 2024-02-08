// 2/7/24 Wednesday Codewars 8 Kyu Fundamentals - Sum of Differences In Array

// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

*/

// 2nd attempt - working, just put "sortedArray.length - 2" instead of "- 1"
function sumOfDifferences(arr) {
    if (arr.length < 2) {
        return 0;
    }

    let differences = [];

    let sortedArray = arr.sort( (a, b) => b - a);

    for(let i = 0; i < sortedArray.length - 2; i++) {
        let difference = sortedArray[i] - sortedArray[i + 1];
        differences.push(difference);
    }

    return differences.reduce( (a, c) => a + c, 0);
}




// 1st attempt - not working
function sumOfDifferences(arr) {
    if (arr.length < 2) {
        return 0;
    }
    let differences = [];

    let sortedArray = arr.sort( (a, b) => b - a);

    for(let i = 0; i < sortedArray.length - 2; i++) {
        let difference = sortedArray[i] - sortedArray[i + 1];
        differences.push(difference);
    }

    return differences.reduce( (a, c) => a + c, 0);
}




/* =============
Other Solutions
============= */
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
// The logic behind it is that the difference between the maximum and minimum elements of an array is the same as adding up all the differences between adjacent elements.

// If you have the array [a,b,c] (already sorted in decending order), then the solution would be (a-b)+(b-c) = a-c+b-b = a-c. All elements other than the maximum and minimum get canceled out.