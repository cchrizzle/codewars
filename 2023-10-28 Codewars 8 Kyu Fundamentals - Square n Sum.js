// Saturday 10/28/23 Codewars 8 Kyu Fundamentals - Square(n) Sum

// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.
*/


function squareSum(numbers){
    // square all elements in array
    let squaredNumbers = numbers.map(number => number ** 2)
    // add all elements in new array
    return squaredNumbers.reduce( (a, c) => a + c, 0)
}

    // As arrow function - working & submitted
    const squareSum = numbers => numbers.map(number => number ** 2).reduce( (a,c) => a + c, 0)




// PREP
// Parameters
// parameters = array of numbers; each of these numbers will be squared; 

// Return


// Examples


// Pseudocode
// square all elements in array
let squaredNumbers = numbers.map(number => number ** 2)

// add all elements in new array
squaredNumbers.reduce( (a, c) => a + c, 0)