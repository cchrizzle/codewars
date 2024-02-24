// 2/23/24 Friday Codewars 8 Kyu Fundamentals - Multiple of Index

// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript

/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
Some cases:

[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/

// 5th attempt - working
function multipleOfIndex(array) {
    const newArray = [];
    if(array[0] === 0) {     
        newArray.push(array[0]);
    }
    for(let i = 1; i < array.length; i++) {
      if(array[i] % i === 0) {
        newArray.push(array[i]);
    }
    }
      
    return newArray;
}






// 4th attempt - not working
function multipleOfIndex(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i === 0 || array[i] % i === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}




// 3rd attempt - not working
// Both 1st and 2nd attempts weren't working because array.indexOf(element) always returns the first index where the given element is found, which may lead to incorrect results when the element is not at the first index or when there are duplicate elements in the array. Fix this issue by using hte index provided by the 'forEach' callback instead of using "array.indexOf(element)"
function multipleOfIndex(array) {
    const newArray = [];
    array.forEach((element, index) => {     // need to specify element AND index
        if (index !== 0 && element % index === 0) {     
            newArray.push(element);
        }
    });
    return newArray;
}





// 2nd attempt - not working
function multipleOfIndex(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % array.indexOf(array[i]) === 0) {
            newArray.push(array[i])
        }
    }
    return newArray;
}





// 1st attempt - not working
function multipleOfIndex(array) {
    const newArray = [];
    array.forEach(element => {
        if(element % array.indexOf(element) === 0) {
            newArray.push(element);
        }
    })
    return newArray;
}




/* =============
Other Solutions
============= */
function multipleOfIndex(array) {
    return array.filter((x,i) => x == 0 || x % i === 0)
}

// Other solutions 2
const multipleOfIndex = array =>
  array.filter((element, index) => element % index == 0 || element == 0)