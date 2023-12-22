// 12/22/23 Friday Codewars 7 Kyu Fundamentals - Count the Digit

// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
Examples:

n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.

Note that 121 has twice the digit 1.
*/

// Own note: when splitting an array, use spread operator [...array] instead of array.split('')

// 5th try - working
// Was comparing string to digit with "joinSquares[i] === d"
function nbDig(n, d) {
    let squares = [];
    for (let i = 0; i <= n; i++) {
        squares.push(i ** 2);
    }

    let joinSquares = squares.join('');
    
    let digitCount = 0;
    for (let i = 0; i < joinSquares.length; i++) {
        if (joinSquares[i] === d.toString()) {      // added toString()
            digitCount += 1;
        }
    }

    return digitCount;
}




// 4th try - not working
// Aughhh wasn't thinking, iterate through element position
function nbDig(n, d) {
    let squares = [];
    for (let i = 0; i <= n; i++) {
        squares.push(i ** 2);
    }

    let joinSquares = squares.join('');
    
    let digitCount = 0;
    for (let i = 0; i < joinSquares.length; i++) {
        if (joinSquares[i] === d) {
            digitCount += 1;
        }
    }

    return digitCount;
}

// 3rd try - not working
// Splitting joined squares into separate array to iterate
function nbDig(n, d) {
    let squares = [];
    for (let i = 0; i <= n; i++) {
        squares.push(i ** 2);
    }

    let joinSquares = squares.join(''),
        splitSquares = joinSquares.split('');
    
    let digitCount = 0;
    splitSquares.forEach(digit => {
        if (digit === d) {
            digitCount += 1;
        }
    })

    return digitCount;
}



// 2nd try - not working
// Don't think "stringSquares" is necessary; joinSquares already converts to string
function nbDig(n, d) {
    let squares = [];
    for (let i = 0; i <= n; i++) {
        squares.push(i ** 2);
    }

    let joinSquares = squares.join('')
    
    let digitCount = 0;
    joinSquares.forEach(digit => {
        if (digit === d) {
            digitCount += 1;
        }
    })

    return digitCount;
}
/* Not working: TypeError: joinSquares.forEach is not a function
    at nbDig (test.js:11:17)
    at Context.<anonymous> (test.js:24:24)
    at process.processImmediate (node:internal/timers:471:21)
*/




// 1st try - not working
function nbDig(n, d) {
    let squares = [];
    for (let i = 0; i <= n; i++) {
        squares.push(i ** 2);
    }

    let joinSquares = squares.join(''),
        stringSquares = joinSquares.toString()
    
    let digitCount = 0;
    stringSquares.forEach(digit => {
        if (digit === d) {
            digitCount += 1;
        }
    })

    return digitCount;
}




/* =============
Other Solutions
============= */