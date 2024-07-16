// 7/16/24 Tuesday Codewars 7 Kyu Fundamentals - esreveR

// https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/
let reverse = function(array) {
    let newArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }

    return newArray;
}




/* =============
Other Solutions
============= */
// Other solution #1 - I like this one because it keeps adding to the front using unshift. Requires a deeper understanding of method.
var reverse = function(array) {
    let newarray = [];
    for (i in array){
      newarray.unshift(array[i]);
    }
    return newarray
}


// Other solution #2 - Reduce method, need to understand this more.
const reverse = array =>
    array.reduce((pre, val) => [val, ...pre], []);