// 7/20/24 Saturday Codewars 8 Kyu Fundamentals - Kata Example Twist

// https://www.codewars.com/kata/525c1a07bb6dda6944000031/train/javascript

/*
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times.
*/


var websites = []
while(websites.length < 1000) {
    websites.push('codewars')
}



/* =============
Other Solutions
============= */
// Other solutions 1
var websites = new Array(1000).fill("codewars");