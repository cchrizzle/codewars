// 2/16/24 Friday Codewars 8 Kyu Fundamentals - String Cleaning

// https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
Examples (input -> output)

'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'

Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/

// 2nd attempt - working
// for loop is reading numbers as strings since they are in a string; convert numbers in array to string
function stringClean(s){
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let cleanString = '';

    for (let i = 0; i < s.length; i++) {
        if (!numbers.includes(s[i])) {
            cleanString += s[i];
        }
    }

    return cleanString;
}


// 1st attempt - not working
function stringClean(s){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let cleanString = '';

    for (let i = 0; i < s.length; i++) {
        if (!numbers.includes(s[i])) {
            cleanString += s[i];
        }
    }

    return cleanString;
}




/* =============
Other Solutions
============= */
function stringClean(s){
    return s.split('').filter((n) => n != parseInt(n)).join('');
}