// 8/7/24 Wednesday Codewars 8 Kyu Fundamentals - Century From Year

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

/*
Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
*/

// 2nd try
function century(year) {
    let yearString = year.toString();
    
    if (yearString.length > 2) {
      if (yearString[yearString.length - 1] > 0 || yearString[yearString.length - 2] > 0) {
        return Number(yearString.slice(0, yearString.length - 2)) + 1;
      } else {
        return Number(yearString.slice(0, yearString.length - 2));
      }
    } else {
      return 1;
    }
}





// 1st try - not working
function century(year) {
    let yearString = year.toString();
    
    if (yearString.length > 2) {
      if (yearString[yearString.length - 1] > 0) {
        return Number(yearString.slice(0, yearString.length - 2)) + 1;
      } else {
        return Number(yearString.slice(0, yearString.length - 2));
      }
    } else {
      return 1;
    }
}




/* =============
Other Solutions
============= */
// Other solution - MUCH BETTER than mine
const century = year => Math.ceil(year/100)




// Other solution #2 - cleaner version of mine
function century(year) {
    let slicedCentury = Number(year.toString().slice(0, -2))
    let slicedZeros = Number(year.toString().slice(-2))
  
    if (year > 100 && slicedZeros > 0) {
      return slicedCentury + 1
    } else if (year > 100 && slicedZeros === 0) {
      return slicedCentury
    } else {
      return 1
    }
}