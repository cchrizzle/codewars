// 9/10/24 Tuesday Codewars 7 Kyu Fundamentals - Filter the Number

// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

/*
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
Task

Your task is to return a number from a string.
Details

You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/

// 2nd attempt - working
var filterString = function(value) {
    return parseInt(value
        .split('')
        .filter(char => !isNaN(char) && char !== '')
        .join('')
    )
}





// 1st attempt - not working
var filterString = function(value) {
    return value
        .split('')
        .filter(char => !isNaN(char) && char !== '')
        .join('')
}




/* =============
Other Solutions
============= */