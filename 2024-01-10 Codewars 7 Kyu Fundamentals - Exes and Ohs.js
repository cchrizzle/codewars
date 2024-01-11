// 1/10/24 Wednesday Codewars 7 Kyu Fundamentals - Exes and Ohs

// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let numberOfX = 0;
    let numberOfO = 0;

    str.split('').forEach(element => {
        if(element.toLowerCase() === 'x') {                 // more efficient to convert whole str to lowercase first and then manipulate;
            numberOfX += 1;
        } else if(element.toLowerCase() === 'o') {
            numberOfO += 1;
        }
    })

    return numberOfX === numberOfO;
}




/* =============
Other Solutions
============= */
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}




// Solution 2
function XO(str) {
    var sum = 0;
    for(var i=0; i<str.length; i++){
      if(str[i].toLowerCase() == 'x') sum++;
      if(str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
}