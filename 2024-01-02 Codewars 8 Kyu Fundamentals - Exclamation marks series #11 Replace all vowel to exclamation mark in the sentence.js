// 1/2/24 Tuesday Codewars 8 Kyu Fundamentals - Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript

/*
Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/




// 3rd attempt - working
function replace(s) {
    let vowels =  ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let replacedStr = '';

    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            replacedStr += '!';
        } else {
            replacedStr += s[i]
        }
    }

    return replacedStr;
}




// 2nd attempt
function replace(s) {
    let vowels =  ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let replacedStr = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] in vowels) {            // "in" is used for objects
            replacedStr += '!';         // += instead of push() function bc replacedStr isn't an array
        } else {
            replacedStr += s[i]
        }
    }

    return replacedStr;
}





// 1st attempt
function replace(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let replacedStr = '';

    for(let i = 0; i < s.length; i++) {
        if(s[i] in vowels) {
            replacedStr.push('!');
        } else {
            replacedStr.push(s[i]);
        }
    }

    return replacedStr;
}




/* =============
Other Solutions
============= */
function replace(s){
    var newS = ''
    var vowels = "aAeEiIoOuU"
    for (var i = 0; i < s.length; i++) {
      if (vowels.indexOf(s[i]) === -1) {
        newS += s[i]
      }  else {
        newS += '!'
      }
    }
    return newS
}




// 2nd solution
const replace = w => (w.split('').map(e => ['a','e','i','o','u'].includes(e.toLowerCase()) ? '!' : e)).join('');




// 3rd solution
function replace(s){
    let a = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let arr = s.split('')
    for(let i = 0; i < arr.length; i++){
        if(a.includes(arr[i])){
             arr[i] = '!'
        }
    }
    return arr.join('')
}