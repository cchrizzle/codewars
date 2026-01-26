// 1/26/26 Codewars 7 Kyu Fundamentals - Squares sequence

// https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

/*
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
Examples

2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

// 3rd attempt - working!
function squares(x, n) {
    if (n <= 0) {
        return [];
    }

    const squaredArray = [x];
    for (let i = 1; i < n; i++) {
        squaredArray.push(squaredArray[i - 1] ** 2);
    }

    return squaredArray;
}

// 2nd attempt - not working, used wrong variable to determine array position
function squares(x, n) {
    if (n <= 0) {
        return [];
    }

    const squaredArray = [x];
    for (let i = 1; i < n; i++) {
        squaredArray.push(squaredArray[n - 1] ** 2);
    }

    return squaredArray;
}

// 1st attempt - not working, didn't account for n <= 0.
function squares(x, n) {
    const squaredArray = [x];
    for (let i = 1; i < n; i++) {
        squaredArray.push(squaredArray[i - 1] ** 2);
    }

    return squaredArray;
}

/* =============
Other Solutions
============= */
function squares(x, n) {
    let arr = [];
    if (n === 0 || n < 0) return arr;

    for (let i = x; arr.length < n; i *= i) {
        arr.push(i);
    }
    return arr;
}
