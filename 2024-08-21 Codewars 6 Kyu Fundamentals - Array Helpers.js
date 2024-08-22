// 8/21/24 Wednesday Codewars 6 Kyu Fundamentals - Array Helpers

// https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

/*
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

    square() must return a copy of the array, containing all values squared
    cube() must return a copy of the array, containing all values cubed
    average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
    sum() must return the sum of all array values
    even() must return an array of all even numbers
    odd() must return an array of all odd numbers

Note: the original array must not be changed in any case!
Example

var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/


// For averaging, use reduce like this:
let array = [1, 2, 3, 4, 5]
array.reduce((a, c) => a + c, 0) / array.length;



// 2nd attempt - working
Array.prototype.square = function() {
    return this.map(num => Math.pow(num, 2));
}

Array.prototype.cube = function() {
    return this.map(num => Math.pow(num, 3));
}

Array.prototype.average = function() {
    let sum = this.reduce((a, c) => a + c, 0);
    return sum / this.length;
}

Array.prototype.sum = function() {
    return this.reduce((a, c) => a + c, 0)
}

Array.prototype.even = function() {
    return this.filter(num => num % 2 === 0);
}

Array.prototype.odd = function() {
    return this.filter(num => num % 2 !== 0);
}




// 1st attempt - not working
let numbers = {
    square (numbers) {
        return numbers.map(num => Math.pow(num, 2));
    },

    cube (numbers) {
        return numbers.map(num => Math.pow(num, 3));
    },

    average (numbers) {
        let sum = numbers.reduce((a, c) => a + c, 0);
        return sum / numbers.length;
    },

    sum (numbers) {
        return numbers.reduce((a, c) => a + c, 0);
    },

    even (numbers) {
        return numbers.filter(num => num % 2 === 0);
    },

    odd (numbers) {
        return numbers.filter(num => num % 2 !== 0);
    }
}




/* =============
Other Solutions
============= */
// Other solution 1 - .sum() method?
Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }


// My own interpretation of extending Array class
Array = {
    square () {
        return this.map(num => Math.pow(num, 2));
    },

    cube () {
        return this.map(num => Math.pow(num, 3));
    },

    average () {
        return this.sum() / this.length;
    },

    sum () {
        return this.reduce((a, c) => a + c, 0);
    },

    even () {
        return this.filter(num => num % 2 === 0);
    },

    odd () {
        return this.filter(num => num % 2 !== 0);
    }
}