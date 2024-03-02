// 3/2/24 Saturday Codewars 7 Kyu Fundamentals - Reversing Fun

// https://www.codewars.com/kata/566efcfbf521a3cfd2000056/train/javascript

/*
You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

Let's say you start with this: "012345"

The first thing you do is reverse it:"543210"
Then you will take the string from the 1st position and reverse it again:"501234"
Then you will take the string from the 2nd position and reverse it again:"504321"
Then you will take the string from the 3rd position and reverse it again:"504123"

Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:"504132"
Input:

A string of length 1 - 1000
Output:

A correctly reordered string.
*/

/* ==============================
Couldn't get, looked at solutions
============================== */


// 3rd attempt - not working
function flipNumber(n) {
    let splitString = n.split('');
    let finalReversed = '';
  
    for (let i = 0; i < splitString.length; i++) {
      finalReversed += splitString.splice(i).reverse().join('');
    }
  
    return finalReversed;
}




// 2nd attempt - not working
function flipNumber(n) {
    let splitString = n.split('');
    let finalReversed = '';

    for (let i = 0; i < splitString.length; i++) {
        let substring = splitString.slice(0, i + 1).reverse().join('');
        finalReversed += substring;
    }

    return finalReversed;
}


// 1st attempt - not working
function flipNumber(n) {
  let splitString = n.split('');
  let reverseString = splitString.reverse();

  let finalReversed = '';
  for (let i = 0; i < reverseString.length; i++) {
    finalReversed += reverseString.slice(i);
  }

  return finalReversed;
}




/* =============
Other Solutions
============= */
const flipNumber = n => n.length < 2 ? n : n.slice(-1) + n[0] + flipNumber(n.slice(1, -1));