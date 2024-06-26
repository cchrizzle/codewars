// 6/26/24 Wednesday Codewars 6 Kyu Fundamentals - Count Characters In Your String

// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

// 1st attempt - working
function count(string) {
    let letters = {};

    for (let letter of string) {
        if (letter in letters) {
            letters[letter] += 1;
        } else {
            letters[letter] = 1;
        }
    }

    return letters;
}



/* =============
Other Solutions
============= */
function count(string) {
    let result = {};
    for(let char of string){
      result[char] = (result[char] || 0) + 1;
    }
    return result;
}

    // Own practice above
    function count(string) {
        let result = {};
    
        for (let char of string) {
            result[char] = (result[char] || 0) + 1
        };
    
        return result;
    }