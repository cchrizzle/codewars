// 2/5/24 Monday Codewars 8 Kyu Fundamentals - Find the Remainder

// https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript

/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.
Examples:

n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/

// 2nd attempt - working, didn't account for if values are equal earlier
function remainder(n, m){
    if(n === m) {
        return n % m;
    } else if(n > m && m != 0) {
        return n % m;
    } else if(m > n && n != 0) {
        return m % n;
    } else {
        return NaN;
    }
}





// 1st attempt - not working
function remainder(n, m){
    if(n > m && m != 0) {
        return n % m;
    } else if(m > n && n != 0) {
        return m % n;
    } else {
        return NaN;
    }
}




/* =============
Other Solutions
============= */
function remainder(a, b){
    return a > b ? a % b : b % a;
}
// Number % 0 will return NaN automatically