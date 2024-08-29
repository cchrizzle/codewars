// 8/29/24 Thursday Codewars 8 Kyu Fundamentals - Exclamation Marks Series #2: Remove All Exclamation Marks From The End Of Sentence

// https://www.codewars.com/kata/57faece99610ced690000165/train/javascript

/*
Remove all exclamation marks from the end of sentence.
Examples

"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/


// 2nd attempt
function remove (string) {
    let splitString = string.split('');

    while(splitString[splitString.length - 1] === '!') {
        splitString.pop();
    }
    return splitString.join('');
}





// 1st attempt - not working
function remove (string) {
    while(string[string.length - 1] === '!') {
        string.pop();
    }
    return string;
}




/* =============
Other Solutions
============= */
// Other solution #1 - bit more direct
function remove(s){
    while (s[s.length - 1] === '!') {
      s = s.slice(0, -1);
    }
    return s;
}