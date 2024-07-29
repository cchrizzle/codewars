// 7/29/24 Monday Codewars 6 Kyu Fundamentals - Unique In Order

// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/


// 2nd attempt
function uniqueInOrder(iterable) {
    if (iterable.length === 0) {
        return [];
    }

    let completedArray = [];

    completedArray.push(iterable[0])
    for (let i = 1; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i - 1]) {
            completedArray.push(iterable[i]);
        }
    }

    return completedArray;
}



// 1st attempt - not working, used Set because I thought to just return unique variables
var uniqueInOrder=function(iterable){
    return new Set(iterable);
}


const uniqueInOrder = iterable => new Set(iterable);



/* =============
Other Solutions
============= */
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

// Other solution 2
function uniqueInOrder(it) {
    var result = []
    
    for (var i = 0; i < it.length; i++) {
      if (it[i] !== result[result.length - 1]) {
        result.push(it[i])
      }
    }
    
    return result
}