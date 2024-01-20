// 1/19/24 Friday Codewars 8 Kyu Fundamentals - Sum of Multiples

// https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript

/*
Your Job

Find the sum of all multiples of n below m
Keep in Mind

    n and m are natural numbers (positive integers)
    m is excluded from the multiples

Examples

sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

*/




// 2nd attempt
function sumMul(n,m){
    if(m <= n) {
        return 'INVALID'
    }

    let sum = 0;
    for(let i = n; i < m; i += n) {
        sum += i;
    }

    return sum;
}




// 1st attempt - not working
function sumMul(n,m){
    if(n < m) {
        return 'INVALID'
    }

    let sum = 0;
    for(let i = n; i < m; i += n) {
        sum += i;
    }

    return sum;
}
// "expected +0 to equal 'INVALID'"




/* =============
Other Solutions
============= */
// Other solutions are similar to mine