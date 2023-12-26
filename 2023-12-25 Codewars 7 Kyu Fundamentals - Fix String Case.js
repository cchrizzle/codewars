// 12/25/23 Monday Codewars 7 Kyu Fundamentals - Fix String Case

// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

More examples in test cases. Good luck!

Please also try:

Simple time difference (https://www.codewars.com/kata/5b76a34ff71e5de9db0000f2)

Simple remove duplicates (https://www.codewars.com/kata/5ba38ba180824a86850000f7)
*/


// Working - other solution below is more efficient though
function solve(s) {
    let capitals = '';
    let lowercase = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i].toUpperCase()) {
            capitals += s[i];
        } else if(s[i] === s[i].toLowerCase()) {
            lowercase += s[i];
        }
    }

    if(capitals.length > lowercase.length) {
        return s.toUpperCase();
    } else {
        return s.toLowerCase();
    }
}




/* =============
Other Solutions
============= */
function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}

// Other solution #2 - filtering
function solve(s){
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
}