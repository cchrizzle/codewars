// 12/28/23 Thursday Codewars 7 Kyu Fundamentals - Disemvowel Trolls

// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/




// 2nd attempt - working - also faster than other solution by 86.42%
function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';

    for(let i = 0; i < str.length; i++) {
        if(!vowels.includes(str[i].toLowerCase())) {
            newStr += str[i]
        }
    }

    return newStr;
}





// 1st attempt
function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let newString = '';
    str.forEach(if(str[i] != vowels) {
        newString.push(str[i])
    });
    return newString;
}




/* =============
Other Solutions
============= */
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}


