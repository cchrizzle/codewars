// 1/4/24 Thursday Codewars 7 Kyu Fundamentals - Alternate Capitalization

// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization (https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1)

Even-odd disparity (https://www.codewars.com/kata/59c62f1bdcc40560a2000060)

*/

// 3rd attempt
function capitalize(s){
    let element1 = '';
    let element2 = '';

    for(let i = 0; i < s.length; i++) {
        if(i % 2 === 0) {
            element1 += s[i].toUpperCase();
        } else {
            element1 += s[i];
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(i % 2 != 0) {
            element2 += s[i].toUpperCase();
        } else {
            element2 += s[i];
        }
    }

    return [element1, element2];
};




// 2nd attempt - not working
function capitalize(s){
    let element1 = '';
    let element2 = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] % 2 === 0) {
            element1 += s[i].toUpperCase();
        } else {
            element1 += s[i];
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(s[i] % 2 != 0) {
            element2 += s[i].toUpperCase();
        } else {
            element2 += s[i];
        }
    }

    return [element1, element2];
};




// 1st attempt - not working, used push instead of +=
function capitalize(s){
    let element1 = '';
    let element2 = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] % 2 === 0) {
            element1.push(s[i].toUpperCase())
        } else {
            element1.push(s[i]);
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(s[i] % 2 != 0) {
            element1.push(s[i].toUpperCase())
        } else {
            element1.push(s[i]);
        }
    }

    return [element1, element2]
};




/* =============
Other Solutions
============= */
function capitalize(s) {
    return s.split('').reduce((acc, val, i) => {
        acc[0] += i % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
        acc[1] += i % 2 === 0 ? val.toLowerCase() : val.toUpperCase();
        return acc;
    }, ['', '']);
};

// Other solution #2
const capitalize = s => {
    const arr = s.split('');
    let a = '', b = '';
    
    for (let i = 0; i < arr.length; i++) {
      if (i % 2) {
        a += arr[i];
        b += arr[i].toUpperCase();
      } else {
        a += arr[i].toUpperCase();
        b += arr[i];
      }
    }
    
    return [a, b];
};