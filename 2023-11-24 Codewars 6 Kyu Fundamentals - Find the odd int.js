// 11/24/23 Friday Codewars 6 Kyu Fundamentals - Find the odd int

// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/




// date Afternoon Practice
function findOdd(A) {
    let numberCount = {};

    A.forEach(number => {
        if(number in numberCount) {
            numberCount[number] += 1;
        } else {
            numberCount[number] = 1;
        }
    });

    for(const count in numberCount) {
        if(numberCount[count] % 2 ) {
            return Number(count);
        }
    }
}



































// date Morning Practice
function findOdd(A) {
    let numberCount = {};

    // count how many of each number
    A.forEach(number => {
      if(number in numberCount) {
        numberCount[number] += 1;
      } else {
        numberCount[number] = 1;
      }
    });
    
    // determine which number appears odd number of times
    for(const count in numberCount) {
      if(numberCount[count] % 2 !== 0) {
        return numberCount[count];
      }
    }
  }






// date Night Practice
function findOdd(A) {
    let numbersCount = {};
    
    // count how many of each number
    A.forEach (number => {
      (const number in numbers)                 // wrong: "if(number in numberCount)"
        if (number[key]) {                      // wrong: numberCount[number] += 1
        // else numberCount[number] = 1
      }
    })
    
    // determine which number has odd amount
    // for (const num in numberCount) {
        // if (numberCount[num] % 2 !== 0)
        // return Number(num)
  }


// typing with reference
function findOdd(A) {
    let numbersCount = {};

    A.forEach(number => {
        for(number in NumbersCount) {           // wrong: don't need
            if(numbersCount[number]) {
                numbersCount[number] += 1;
            } else {
                numbersCount[number] = 1;
            }
        }
    })

    // determine which number appears odd number of times
    // forgot for(const num in numberCount)
        if (numbersCount[num] % 2 !== 0) {
            return numbersCount[number];                // wrong: "return Number[number]"
        }
}




















// 4th try - working
function findOdd(A) {
    // count each time a number appears
    let numberCount = {};

    A.forEach(number => {
        if(number in numberCount) {
            numberCount[number] += 1;
        } else {
            numberCount[number] = 1;
        }
    })

    // determine which number appears an odd amount of times
    for(const num in numberCount) {
        if(numberCount[num] % 2 !== 0) {
            return Number(num);                 // Added Number() to convert to number
        }
    }
}




// 3rd try - Looking up better methods online
function findOdd(A) {
    // count each time a number appears
    let numberCount = {};

    A.forEach(number => {
        if(number in numberCount) {
            numberCount[number] += 1;
        } else {
            numberCount[number] = 1;
        }
    });

    // determine which number appears an odd amount of times
    for(const num in numberCount) {
        if(numberCount[num] % 2 !== 0) {
            return num;
        }
    }
}
// Example tests
// Incorrect answer for input=[7]: expected '7' to equal 7
// Completed in 2ms
// Fixed tests
// Incorrect answer for input=[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]: expected '5' to equal 5





// 1st try
function findOdd(A) {
    // count each time a number appears
    let one = two = three = four = five = six = seven = eight = nine = zero = 0;
    A.forEach(number => {
        if(number === '0') {
            zero += 1;
        } else if(number === 1) {
            one += 1;
        } else if(number === 2) {
            two += 1;
        } else if(number === 3) {
            three += 1;
        } else if(number === 4) {
            four += 1;
        } else if(number === 5) {
            five += 1;
        } else if(number === 6) {
            six += 1;
        } else if(number === 7) {
            seven += 1;
        } else if(number === 8) {
            eight += 1;
        } else if(number === 9) {
            nine += 1;
        };
    // determine which number appears an odd number of times
    })
    switch (findOdd) {
        case !isInteger(zero % 2):
            return 0;
        case !isInteger(one % 2):
            return 1;
        case !isInteger(two % 2):
            return 2;
        case !isInteger(three % 2):
            return 3;
        case !isInteger(four % 2):
            return 4;
        case !isInteger(five % 2):
            return 5;
        case !isInteger(six % 2):
            return 6;
        case !isInteger(seven % 2):
            return 7;
        case !isInteger(eight % 2):
            return 8;
        case !isInteger(nine % 2):
            return 9;
    }
}





// 2nd try
function findOdd(A) {
    // count each time a number appears
    let one = two = three = four = five = six = seven = eight = nine = zero = 0;
    A.forEach(number => {
        if(number === '0') {
            zero += 1;
        } else if(number === 1) {
            one += 1;
        } else if(number === 2) {
            two += 1;
        } else if(number === 3) {
            three += 1;
        } else if(number === 4) {
            four += 1;
        } else if(number === 5) {
            five += 1;
        } else if(number === 6) {
            six += 1;
        } else if(number === 7) {
            seven += 1;
        } else if(number === 8) {
            eight += 1;
        } else if(number === 9) {
            nine += 1;
        };
    // determine which number appears an odd number of times
    })
    switch (findOdd) {
        case zero % 2 === 0:
            return 0;
        case one % 2 === 0:
            return 1;
        case two % 2 === 0:
            return 2;
        case three % 2 === 0:
            return 3;
        case four % 2 === 0:
            return 4;
        case five % 2 === 0:
            return 5;
        case six % 2 === 0:
            return 6;
        case seven % 2 === 0:
            return 7;
        case eight % 2 === 0:
            return 8;
        case nine % 2 === 0:
            return 9;
    }
}




/* =============
Other Solutions
============= */
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
/* Explanation
"const findOdd: This line declares a constant variable findOdd and assigns it an arrow function. The function takes one parameter, xs, which represents the array of integers.

(a, b) => a ^ b: This part of the code is an arrow function used as a callback for the reduce method. The ^ operator in JavaScript performs a bitwise XOR operation. XOR (exclusive OR) returns 1 for bits that are different and 0 for bits that are the same. For example, 1 ^ 1 results in 0, and 1 ^ 0 results in 1.

xs.reduce((a, b) => a ^ b): Here, the reduce method is used on the input array xs. The reduce method takes a callback function that is applied to each element of the array. In this case, the callback function (a, b) => a ^ b calculates the XOR of the accumulated result a and the current element b. This operation is performed iteratively over the elements of the array until a single result is obtained.

The XOR operation has a special property: if you XOR a number with itself an odd number of times, the result will be the number itself. If you XOR a number with itself an even number of times, the result will be 0. Since all numbers in the array appear even times except for one, the XOR operation will eventually leave you with the number that appears an odd number of times.

In summary, this code calculates the XOR of all the elements in the array, effectively finding the number that appears an odd number of times, and returns that number as the result of the findOdd function."
*/


// More good info from comments regarding purpose of comments
// "Comments shouldn't explain the what or the how of a certain piece of code (basically what intent + explanation means), they should explain the why, that's what truly adds value to readability without clogging your mind with unnecessary low level details, and makes code pieces literally essays."





function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
}
// More efficient version of mine