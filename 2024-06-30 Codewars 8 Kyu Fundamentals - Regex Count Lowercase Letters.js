// 6/30/24 Sunday Codewars 8 Kyu Fundamentals - Regex Count Lowercase Letters

// https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript

/*
Your task is simply to count the total number of lowercase letters in a string.
Examples

"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
*/

function lowercaseCount(str){
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'

    let lowerCaseArray = lowerCase.split('');


    let lowerCaseCount = 0;

    for (let char of str) {
        if (lowerCaseArray.includes(char)) {
            lowerCaseCount++;
        }
    }

    return lowerCaseCount;
}




/* =============
Other Solutions
============= */