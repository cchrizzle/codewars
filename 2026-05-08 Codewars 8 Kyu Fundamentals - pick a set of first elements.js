// 5/8/26 Friday Codewars 8 Kyu Fundamentals - pick a set of first elements

// https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript

/*
Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []
Examples

var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

// 2nd attempt - working!
function first(arr, n = 1) {
    return arr.slice(0, n);
}

// 1st attempt - not working
function first(arr, n) {
    const result = [];

    if (n === 0) {
        return [];
    }

    for (let i = 0; i < n; i++) {
        first.push(arr[i]);
    }

    return first;
}

/* =============
Other Solutions
============= */
