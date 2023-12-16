// 12/16/23 Saturday Codewars 7 Kyu Fundamentals - Fizz Buzz

// https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript

/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

// 2nd attempt
// Started i at 0 which was pushing "FizzBuzz" first into the array
function fizzbuzz(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {  // Changed 0 to 1
        if (i % 15 === 0) {
            array.push('FizzBuzz');
        } else if (i % 3 === 0) {
            array.push('Fizz');
        } else if (i % 5 === 0) {
            array.push('Buzz');
        } else {
            array.push(i);
        }
    }

    return array;
}

// 1st attempt - not working
function fizzbuzz(n) {
    let array = [];
    for (let i = 0; i <= n; i++) {
        if (i % 15 === 0) {
            array.push('FizzBuzz');
        } else if (i % 3 === 0) {
            array.push('Fizz');
        } else if (i % 5 === 0) {
            array.push('Buzz');
        } else {
            array.push(i);
        }
    }

    return array;
}





/* =============
Other Solutions
============= */
function fizzbuzz(n) {
	var fizzified = [];
  for (var i = 1; i <= n; i++) {
    var val = '';
    if (i % 3 == 0) val += 'Fizz';
    if (i % 5 == 0) val += 'Buzz';
   	fizzified.push(val || i);
  }
  return fizzified;
}