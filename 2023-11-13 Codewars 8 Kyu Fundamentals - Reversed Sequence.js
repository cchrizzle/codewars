// 11/13/23 Codewars 8 Kyu Fundamentals - Reversed Sequence

// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/




// 2nd attempt
const reverseSeq = n => {
    let array = [];                 // From comments: "arrays should usually be declared as const sine the variable is tied to the array's object address in memory and not the content of the array. Meaning you can modify everything in your array even if it has been declared as a constant. If you want to re-assign your variable to another object, you should probably use another variable..."
    for(let i = n; i > 0; i--) {
        array.push(i);                  // Put "n" instead of "i"
    }
    return array;
};





// 1st attempt
const reverseSeq = n => {
    let array = [];
    for(let i = n; i > 0; i--) {
        array.push(n);
    }
    return array;
};




/* =============
Other Solutions
============= */