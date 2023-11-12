// 11/11/23 Saturday Codewars 8 Kyu Fundamentals - What Is Between?

// https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascripturl

/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/




// 2nd attempt
function between(a, b) {
    let array = [];
    for (let i = a; i <= b; i++) {
        array.push(i);          // Used brackets instead of parenthesis
    }
    return array;
}
/* ChatGPT explanation: "I see the issue in your code. You are trying to push elements into the array using square brackets (array.push[i]) instead of using parentheses (array.push(i)). Square brackets are used for accessing elements in an array, while parentheses are used for calling functions, like push."





// 1st attempt
function between(a, b) {
    let array = [];
    for (let i = a; i <= b; i++) {
        array.push[i];
    }
    return array;
}
// Not working: "expected [] to deeply equal [ 1, 2, 3, 4 ]"




/* =============
Other Solutions
============= */