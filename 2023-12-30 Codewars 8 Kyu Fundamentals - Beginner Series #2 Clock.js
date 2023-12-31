// 12/30/23 Saturday Codewars 8 Kyu Fundamentals - Beginner Series #2 Clock

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
*/

function past(h, m, s){
    let hours = 1000 * 60 * 60 * h;
    let minutes = 1000 * 60 * m;
    let seconds = 1000 * s;

    return hours + minutes + seconds;
}




/* =============
Other Solutions
============= */