// 8/1/24 Thursday Codewars 7 Kyu Fundamentals - Form the Minimum

// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

/*
Task

Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
Notes:

    Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
    Input >> Output Examples

minValue ({1, 3, 1})  ==> return (13)

Explanation:

(13) is the minimum number could be formed from {1, 3, 1} , Without duplications 
*/

function minValue(values){
    let newArray = [];

    values.forEach(e => {
        if (!newArray.includes(e)) {
            newArray.push(e);
        }
    })

    return parseInt(newArray.sort((a, b) => a - b).join(''));
}




/* =============
Other Solutions
============= */
// Other solutions 1 - Set
function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
}

// Other solutions 2 - indexOf
function minValue(values){
    const n = values
      .filter((e, i, arr) => arr.indexOf(e) === i)
      .sort()
      .join('');
    return Number(n);
}