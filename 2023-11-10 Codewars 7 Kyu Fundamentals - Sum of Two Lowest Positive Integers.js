// 11/10/23 Friday Codewars 7 Kyu Fundamentals - Sum of two lowest positive integers

// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {  
    let sortedNumbers = numbers.sort( (a,b) => a - b);
    let twoSmallestNums = sortedNumbers.slice(0,2);
    return twoSmallestNums.reduce( (a,c) => a + c, 0);
}




/* =============
Other Solutions
============= */
function sumTwoSmallestNumbers(numbers) {
    if( numbers.length < 2 ) return 0;
    
    let minA = numbers[0] < numbers[1] ? numbers[0] : numbers[1],
        minB = numbers[1] == minA ? numbers[0] : numbers[1];
    
    for(let i=2; i<numbers.length; i++){
      if(numbers[i] < minA){
        minB = minA;
        minA = numbers[i];
      }
      else if(numbers[i] < minB){
        minB = numbers[i];
      }
    }
    
    return minA + minB;
}
// for loop more efficient than sort: "The .sort() method has a time complexity of O(n log(n)). This algo can be solved with one simple for loop as seblm described with a time complexity of O(n), which will be far more performant as your array grows in size."