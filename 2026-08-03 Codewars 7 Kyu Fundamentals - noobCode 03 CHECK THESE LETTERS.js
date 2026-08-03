// 8/3/26 Monday Codewars 7 Kyu Fundamentals - noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"

// https://www.codewars.com/kata/57470efebf81fea166001627/train/javascript

/*
Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

["ab", "aaa"]    =>  true
["trances", "nectar"]    =>  true
["compadres", "DRAPES"]  =>  true
["parses", "parsecs"]    =>  false

Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array. 
*/

// 3rd attempt
function letterCheck(arr) {
    const firstStringMap = {};

    const arr0LowerCase = arr[0].toLowerCase();
    const arr1LowerCase = arr[1].toLowerCase();

    for (const letter of arr0LowerCase) {
        firstStringMap[letter] = (firstStringMap[letter] ?? 0) + 1;
    }

    for (const letter of arr1LowerCase) {
        if (!firstStringMap[letter]) {
            return false;
        }
    }

    return true;
}

// 2nd attempt - not working, used firstStringMap[arr0LowerCase[letter]] instead of just firstStringMap[letter]
function letterCheck(arr) {
    const firstStringMap = {};

    const arr0LowerCase = arr[0].toLowerCase();
    const arr1LowerCase = arr[1].toLowerCase();

    for (const letter of arr0LowerCase) {
        firstStringMap[arr0LowerCase[letter]] = (firstStringMap[arr0LowerCase] ?? 0) + 1;
    }

    for (const letter of arr1LowerCase) {
        if (!firstStringMap[letter]) {
            return false;
        }
    }

    return true;
}

// 1st attempt - not working, missed part where it said ignore case
function letterCheck(arr) {
    let firstStringMap = {};
    const arr0 = arr[0];
    const arr1 = arr[1];

    for (const letter of arr0) {
        firstStringMap[letter] = (firstStringMap[letter] ?? 0) + 1;
    }

    for (const letter of arr1) {
        if (!firstStringMap[letter]) {
            return false;
        }
    }

    return true;
}

/* =============
Other Solutions
============= */
