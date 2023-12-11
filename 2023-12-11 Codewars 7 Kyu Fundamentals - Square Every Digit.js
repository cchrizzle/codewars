// 12/11/23 Monday Codewars 7 Kyu Fundamentals - Square Every Digit

// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!

*/




// PREP
// Parameters
    // Integers

// Returns


// Examples

// Pseudocode
    // Take input
        num

    // Split input into individual digits
        let splitNum = num.split('')
    
    // Square each digit of input
        let squareSplit = splitNum.map(num => num ** 2);

    // Concatenate
    let result = squareSplit.join('')




// 2nd attempt - working
function squareDigits(num){
    let stringNum = num.toString();
    let splitNum = stringNum.split('');
    let squareSplit = splitNum.map(num => num ** 2);
    return Number(squareSplit.join(''));
}




// 1st attempt - not working, need to convert num to string for array methods to work on it
function squareDigits(num){
    let splitNum = num.split('');
    let squareSplit = splitNum.map(num => num ** 2);
    return squareSplit.join('');
}




/* =============
Other Solutions
============= */
function squareDigits(num){
    return +Array.from(num.toString()).reduce((p,c) => p + Math.pow(c,2),'');       // 2 new uses of reduce method: exponent and concatenate as well as automatically converting to number
}

// Nice setup for anyone to be able to pick up and understand
function squareDigits(num){
  
    // step 1 - toString
    // step 2 - split - array now
    // step 3 - convert back to number
    // step 4 - square each index of array
    // step 5 - convert back to string of array
    // step 6 - join array to form a string.
    
    const toString = String(num);
    const toStrArray = toString.split("");
    const arrayOfNum = toStrArray.map(str=>Number(str));
    const squaredArray = arrayOfNum.map(num=> num*num);
    const backToStrArray = squaredArray.map(num=>String(num));
    const backToStr = backToStrArray.join("");
    const result = Number(backToStr);
    
    return result;
}