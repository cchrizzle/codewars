// 11/8/23 Wednesday Codewars 8 Kyu Fundamentals - Exclamation marks series #1: Remove an exclamation mark from the end of string

// https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript

/* Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples

"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

function remove (string) {
    if(string[string.length - 1] === '!') {
        return string.split('').slice(0, string.length - 1).join('');
    } else {
        return string;
    }
}



/* =============
Other Solutions
============= */
function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }