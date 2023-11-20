// 11/20/23 Monday Codewars 8 Kyu Fundamentals - String Repeat

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/




// Both working
function repeatStr (n, s) {
    let repeat = []
    while (repeat.length < n) {
        repeat.push(s);
    }
    return repeat
        .join('');
}





// Doing as for loop - also works
function repeatStr (n, s) {
    let repeat = [];
    for(let i = 0; i < n; i++) {
        repeat.push(s);
    }
    return repeat
        .join('');
}



/* =============
Other Solutions
============= */
function repeatStr (n, s) {
    return s.repeat(n);                 // NEW METHOD - repeat()
}




function repeatStr (n, s) {
    let a = s;
    for ( var i = 1; i < n; i++) a+=s;          // String concatenation - saved steps of setting up array and joining
    return a;
}