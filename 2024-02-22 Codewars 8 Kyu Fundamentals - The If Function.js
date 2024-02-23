// 2/22/24 Thursday Codewars 8 Kyu Fundamentals - The 'if' function

// https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript

/*
Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.
Example:

_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.

*/

// 2nd try - working
function _if(bool, func1, func2) {
    if (bool) {        
        func1();
    } else {
        func2();
    }
}



// 1st try - not working
function _if(bool, func1, func2) {
    if (bool === true) {
        func1();
    } else {
        func2();
    }
}




/* =============
Other Solutions
============= */
// As ternary
function _if(bool, func1, func2) {
    return bool ? func1() : func2();
}