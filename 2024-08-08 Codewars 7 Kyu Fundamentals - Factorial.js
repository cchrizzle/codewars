// 8/8/24 Thursday Codewars 7 Kyu Fundamentals - Factorial

// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

/*
Your task is to write function factorial.
*/

function factorial(n){
    let total = 1;
    while (n > 1) {
        total *= n;
        n -= 1;
    }
    return total;
}



// Recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}




/* =============
Other Solutions
============= */
// Other solution 1 - recursion
const factorial = n => n ? factorial(n - 1) * n : 1;