// 5/7/26 Thursday Codewars 7 Kyu Fundamentals - Double Sort

// https://www.codewars.com/kata/57cc79ec484cf991c900018d/train/javascript

/*
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.
*/

function dbSort(a) {
    const numbersArray = [];
    const stringsArray = [];

    a.forEach(e => (typeof e === 'string' ? stringsArray.push(e) : numbersArray.push(e)));

    const sortedNumbersArray = numbersArray.sort((a, b) => a - b);
    const sortedStringsArray = stringsArray.sort();

    return sortedNumbersArray.concat(sortedStringsArray);
}

/* =============
Other Solutions
============= */
function dbSort(a) {
    let num = a.filter(x => typeof x == 'number').sort((a, b) => a - b);
    let string = a.filter(x => typeof x == 'string').sort();
    return num.concat(string);
}
