// 10/11/24 Friday Codewars 7 Kyu Fundamentals - Convert An Array Of Strings To Array Of Numbers

// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript

/*
Oh no!

Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

function toNumberArray(stringarray){
    return stringarray.map(string => Number(string));
}




/* =============
Other Solutions
============= */
// Other solution 1 - I don't need to break it down in an arrow function
const toNumberArray = stringarray => stringarray.map(Number);