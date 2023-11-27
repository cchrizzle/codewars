// 11/27/23 Monday Codewars 8 Kyu Fundamentals - Is It a Palindrome?

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

/*
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

*/

function isPalindrome(x) {
    const reverseX = x.toLowerCase().split('').reverse().join('');
    return x.toLowerCase() === reverseX;
}




/* =============
Other Solutions
============= */