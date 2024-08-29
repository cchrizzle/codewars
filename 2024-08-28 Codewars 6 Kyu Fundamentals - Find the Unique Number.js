// 8/28/24 Wednesday Codewars 6 Kyu Fundamentals - Find the Unique Number

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string (https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3)
    Find The Unique (https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5)
*/

// 2nd attempt
function findUniq(arr) {
    let sortedDesc = arr.sort((a, b) => b - a);

    if (sortedDesc[0] !== sortedDesc[1]) {
        return sortedDesc[0];
    } else {
        return sortedDesc[sortedDesc.length - 1]
    }
}


// 1st attempt - not working
function findUniq(arr) {
    let sortedDesc = arr.sort((a, b) => b - a);

    return sortedDesc[0];
}




/* =============
Other Solutions
============= */
// Other solution #1 - similar to mine but used pop instead of "sortedDesc.length - 1"
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}

// Other solution #2 - most efficient based on comments
function findUniq(arr) {
    let [a,b,c] = arr.slice(0,3);
    if( a != b && a!=c ) return a;
    for( let x of arr ) if( x!=a ) return x
}
    /* Explanation: If the first three elements are the same, it runs the for loop. Since a can't be the unique number since it's equal to the two checked numbers and only 1 number can be different, you can safely assume that if any of the elements x in the array don't equal a, that element is the unique number you're looking for.

    I had to actually run this with breakpoints to understand what was happening as I was also confused.
    */





/* General comment from one of other solutions:
I would be careful when using array methods (that doesn't make a shallow copy) directly on the parameter of a function. This solution would alter the original array that was sent as a parameter, which might not always be what you want.

Example:

const arrayOfNum = [1, 1, 1, 1, 2];

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

console.log(arrayOfNum) //[1, 1, 1, 1, 2]
findUniq(arrayOfNum)
console.log(arrayOfNum) //[1, 1, 1, 1]
*/