// 10/10/24 Thursday Codewars 8 Kyu Fundamentals - Sum Without Highest and Lowest Number
/*
Task

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
Example

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/


// 10/10/24

// 2nd attempt - working
function sumArray(array) {
    if (!array || array.length <= 1) {
        return 0;
    } else {
        const sortedArray = array.sort((a, b) => a - b);
  
        return sortedArray.slice(1, -1).reduce((a, c) => a + c, 0);
    }
}




// 1st attempt - not working
function sumArray(array) {
    const sortedArray = array.sort((a, b) => a - b);

    return sortedArray.slice(1, -1).reduce((a, c) => a + c, 0);
}













// 9/30/23 Old thought process


function sumArray(array) {
    if(!Array.isArray(array) || array.length <= 1) {
        return 0;
    } else {
        let sortArray = array.sort( (a,b) => a-b );
        let sliceArray = sortArray.slice(1, sortArray.length - 1);
        return sliceArray.reduce( (a, c) => a + c, 0);
    }
}