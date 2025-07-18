// 7/17/25 Thursday Codewars 7 Kyu Fundamentals - Simple remove duplicates

// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:

For input: [3, 4, 4, 3, 6, 3]

    remove the 3 at index 0
    remove the 4 at index 1
    remove the 3 at index 3

Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
*/

// 2nd attempt - working!
function solve(arr) {
    const reverseArr = arr.reverse();
    const reverseSet = new Set(reverseArr);

    return [...reverseSet].reverse();
}

// 1st attempt - wrong, need to reverse array first before putting into set
function solve(arr) {
    const arrSet = new Set(arr);
    return [...arrSet].reverse();
}

/* =============
Other Solutions
============= */
function solve(arr) {
    return arr.filter((val, i) => arr.lastIndexOf(val) == i);
}
