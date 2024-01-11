// 1/11/24 Thursday Codewars 7 Kyu Fundamentals - Remove the minimum

// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

/*
The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
Examples

* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

// 2nd attempt
function removeSmallest(numbers) {
    const minIndex = numbers.indexOf(Math.min(...numbers));
    return numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1))
}




// 1st attempt - not working
function removeSmallest(numbers) {
    return array.splice(indexOf(Math.min(...array)), 1)
}






// Old code from before
// function removeSmallest(numbers) {
//     let sortedArray = numbers.sort()
//     let finalArray = []
//     for(let i = 1; i < numbers.length; i++) {
//         finalArray.push(sortedArray[i]);
//     }
//     return finalArray;
// }




/* =============
Other Solutions
============= */