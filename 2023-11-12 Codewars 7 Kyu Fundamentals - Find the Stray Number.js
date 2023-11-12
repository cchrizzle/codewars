// 11/12/23 Sunday Codewars 7 Kyu Fundamentals - Find the stray number

// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/




// 4th attempt - working
function stray(numbers) {
    if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {           // Accounting for if stray number at beginning
        return numbers[0];
    }

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i - 1]) {
            return numbers[i];
        }
    }
}




// 3rd attempt
function stray(numbers) {
    let strayNumber = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i - 1]) {
           strayNumber = numbers[i];
           break;           // Needed to add "break" to exit the loop once the different number is found
        }
    }
    return strayNumber;
}
/* Not working: Should pass Fixed Tests
expected 1 to equal 8
Completed in 2ms
Completed in 2ms
Random Tests
Should pass some Edge Tests
Stray number is at the beginning: expected 4355 to equal -6205
*/




// 2nd attempt
function stray(numbers) {
    let strayNumber = 0;
    for (let i = 1; i < numbers.length; i++) {          // Started i at 1 instead of 0 to try to account for potential negative; still not working
        if (numbers[i] !== numbers[i - 1]) {
           strayNumber = numbers[i];
        }
    }
    return strayNumber;
}




// 1st attempt
function stray(numbers) {
    let strayNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers [i] !== numbers[i - 1]) {
           strayNumber = numbers[i];
        }
    }
    return strayNumber;
}
/* Not working: "Should pass Fixed Tests
expected 17 to equal 3
Completed in 2ms
Completed in 2ms
Random Tests
Should pass some Edge Tests
Stray number is at the beginning: expected 5609 to equal -9315
Completed in 1ms
Should pass Random Tests
expected -3681 to equal 5772"
*/



/* =============
Other Solutions
============= */
function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}




// Another solution
function stray(numbers) {
    if (numbers[0] === numbers[1]) {
      return numbers.find(n => n !== numbers[0])
    }
    return numbers[0] === numbers[2] ? numbers[1] : numbers[0]
}