// 1/26/24 Friday Codewars 5 Kyu Fundamentals - Maximum Subarray Sum

// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/javascript

/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

*/




// 3rd attempt - working
var maxSequence = function(arr){
    if(arr.length === 0) { 
        return 0;
    }

    let maxSequenceEnd = arr[0];
    let currentMax = arr[0];

    for(let i = 1; i < arr.length; i++) {                   // changed "i = 0" to "i = 1"
        maxSequenceEnd = Math.max(arr[i], maxSequenceEnd + arr[i]);
        currentMax = Math.max(currentMax, maxSequenceEnd);
    }

    return Math.max(currentMax, 0);
}





// 2nd attempt - not working
var maxSequence = function(arr){
    if(arr.length === 0) {                  // Removed reduce function
        return 0;
    }

    let maxSequenceEnd = arr[0];
    let currentMax = arr[0];

    for(let i = 0; i < arr.length; i++) {
        maxSequenceEnd = Math.max(arr[i], maxSequenceEnd + arr[i]);
        currentMax = Math.max(currentMax, maxSequenceEnd);
    }

    return Math.max(currentMax, 0);
}
// Passes 3, fails 2
// "Incorrect answer for input=[7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43]: expected 162 to equal 155"

// "Incorrect answer for input=[44,20,38,-48,-14,-27,-36,20,37,-37,-45,-38,31,24,-5,-37,-22]: expected 146 to equal 102"




// 1st attempt - not working
var maxSequence = function(arr){
    if(arr.length === 0 || arr.reduce( (a, c) => a + c, 0) <= 0) {                  // was using reduce method to account for arrays with all negative, but it doesn't work if there's just more negative values than positive values
        return 0;
    }

    let maxSequenceEnd = arr[0];
    let currentMax = arr[0];

    for(let i = 0; i < arr.length; i++) {
        maxSequenceEnd = Math.max(arr[i], maxSequenceEnd + arr[i]);
        currentMax = Math.max(currentMax, maxSequenceEnd);
    }

    return Math.max(currentMax, 0);
}




/* =============
Other Solutions
============= */
// Notes: problem uses Kadane's algorithm - https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d

// Chart to visualize code: https://codepen.io/risingbirdsong/pen/VwYdqZd


var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
}
    /* From comments on this solution: "It took me a while to figure this out.

        If you have a sequence of 8 numbers and the run of numbers from 3 - 6 gives the greatest sum, that value is the same as the numbers 1 - 6 minus the numbers 1 - 2. In the function shown above SUM is the current sum of numbers starting from the 0 index. MIN is the running least sum starting from the 0 index. ANS is the running highest difference between the two sets. When the index is 6, the SUM, MIN and ANS values are shown below. 2 minus -4 = 6. When the index is 7 or 8 the ANS value will not be any greater, so the final value returned is 6.

        [-2, 1, -3, 4, -1, 2, 1, -5, 4] 0, 1, 2, 3, 4, 5, 6, 7, 8 SUM_2_ MIN-4_ _ANS_6
        "