// 2023-11-21 Tuesday Codewars 8 Kyu Fundamentals - Powers of 2

// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/




// 4th attempt
function powersOfTwo(n) {
    let powers = [];
    for(let i = 0; i <= n; i++) {
        powers.push(Math.pow(2, i));                    // Was using "n" instead of "i"
    }
    return powers;
}




// 3rd attempt
function powersOfTwo(n) {
    let powers = [];
    for(let i = 0; i <= n; i++) {
        powers.push(2 ** n);
    }
    return powers;
}





// 2nd attempt
function powersOfTwo(n) {
    let powers = [];
    for(let i = 0; i <= n; i++) {
        powers.push(Math.pow(2, n));
    }
    return powers;
}
    /* Not working: Testing for fixed tests: expected [ 2, 2 ] to deeply equal [ 1, 2 ]
    Testing for n = 0: expected [ 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192, 8192 ] to deeply equal [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192 ]
    */





// 1st attempt
function powersOfTwo(n){
    let powers = [];
    while(powers.length <= n + 1) {
        powers.push(Math.pow(2, n));
    }
    return powers;
}




/* =============
Other Solutions
============= */