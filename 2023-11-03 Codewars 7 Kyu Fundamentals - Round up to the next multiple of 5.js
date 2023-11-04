// 11/3/23 Friday Codewars 7 Kyu Fundamentals - Round up to the next multiple of 5

// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript

/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
*/




function roundToNext5(n){
    // if multiple of 5, return number
    if(n % 5 === 0) {
        return n;
    // need to figure out next increasing closest multiple of 5
    } while(n % 5 !== 0) {
        n++;
    }
    return n;
}




/* =============
Other Solutions
============= */
function roundToNext5(n){
    return Math.ceil(n/5)*5;
}


// More efficient version of mine
function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
}
    // Somoene's comment on this code: "Don't understand why it is the best practice. You are modifying the given parameter (to write less maybe), and '!==0' is useless here. You should declare n in a new var and just write 'n%5' (as a boolean)."
    
        // That person's code:
        function roundToNext5(n){
            let n1 = n;
            while(n1%5){n1++}
            return n1
          }