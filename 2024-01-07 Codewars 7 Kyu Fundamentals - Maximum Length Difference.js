// 1/7/24 Sunday Codewars 7 Kyu Fundamentals - Maximum Length Difference

// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Bash note:

    input : 2 strings with substrings separated by ,
    output: number as a string

*/

// 2nd attempt - works
// ****** Using array - works
function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) {
        return -1;
    }

    let a1MaxLength = Math.max(...a1.map(str => str.length));
    let a1MinLength = Math.min(...a1.map(str => str.length));

    let a2MaxLength = Math.max(...a2.map(str => str.length));
    let a2MinLength = Math.min(...a2.map(str => str.length));



    return Math.max(Math.abs(a1MaxLength - a2MinLength), Math.abs(a1MinLength - a2MaxLength));
}


// First run of 2nd attempt, trying new approach using objects
function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) {
      return -1
    }
    
    let a1Longest = 0;
    let a1Shortest = 99999;

    let a2Longest = 0;
    let a2Shortest = 99999;
    

    for(let i = 0; i < a1.length; i++) {
        if(a1[i].length > a1Longest) {
            a1Longest = a1[i].length;
        }
    }

    for(let j = 0; j < a2.length; j++) {
        if(a2[j].length > a2Longest) {
            a2Longest = a2[j].length;
        }
    }

    return Math.abs(a1Longest - a2Longest);
}

    // Using object - skipping b/c it's more than necessary; can just put the lengths of the strings in an array
    function mxdiflg(a1, a2) {
        if(a1.length === 0 || a2.length === 0) {
            return -1;
        }

        let stringLengths = {};

        for(let i = 0; i < a1.length; i++) {
            if(a1[i].length in stringLengths) {
                stringLengths[a1[i].length] += 1;
            } else {
                stringLengths[a1[i].length] = 1;
            }
        }

        for(let j = 0; j < a2.length; j++) {
            if(a2[j].length in stringLengths) {
                stringLengths[a2[j].length] += 1;
            } else {
                stringLengths[a2[j].length] = 1;
            }
        }

    }

// ****** Using array - works, copied to top
    function mxdiflg(a1, a2) {
        if(a1.length === 0 || a2.length === 0) {
            return -1;
        }

        let a1MaxLength = Math.max(...a1.map(str => str.length));
        let a1MinLength = Math.min(...a1.map(str => str.length));

        let a2MaxLength = Math.max(...a2.map(str => str.length));
        let a2MinLength = Math.min(...a2.map(str => str.length));



        return Math.max(Math.abs(a1MaxLength - a2MinLength), Math.abs(a1MinLength - a2MaxLength));
    }






// 1st attempt, not working - prompt is a bit confusing, should be subtracting the highest max from the lowest min of either array
function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) {
      return -1
    }
    
    let a1Longest = 0;
    let a2Longest = 0;

    for(let i = 0; i < a1.length; i++) {
        if(a1[i].length > a1Longest) {
            a1Longest = a1[i].length;
        }
    }

    for(let j = 0; j < a2.length; j++) {
        if(a2[j].length > a2Longest) {
            a2Longest = a2[j].length;
        }
    }

    return Math.abs(a1Longest - a2Longest);
}




/* =============
Other Solutions
============= */