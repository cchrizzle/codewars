// 8/26/26 Wednesday Codewars 7 Kyu Fundamentals - Basic Sequence Practice

// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript

/*
In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3

Your Task

Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. When < 0 return the sequence with negative terms.
Examples

 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]
*/

// Refactoring code
function sumOfN(n) {
    const sequence = [0];
    if (n === 0) return sequence;

    for (let i = 1; i <= Math.abs(n); i++) {
        if (n > 0) {
            sequence.push(sequence[i - 1] + i);
        } else {
            sequence.push(sequence[i - 1] - i);
        }
    }

    return sequence;
}

// 1st attempt - working!
function sumOfN(n) {
    const sequence = [0];

    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            sequence.push(sequence[i - 1] + i);
        }
    }

    if (n < 0) {
        for (let i = 1; i <= Math.abs(n); i++) {
            sequence.push(sequence[i - 1] - i);
        }
    }

    return sequence;
}

/* =============
Other Solutions
============= */
