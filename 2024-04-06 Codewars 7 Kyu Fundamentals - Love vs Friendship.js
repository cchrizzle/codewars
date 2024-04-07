// 4/6/24 Saturday Codewars 7 Kyu Fundamentals - Love vs Friendship

// https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/

function wordsToMarks(string){
    let alphabetArray = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ]
    
    let total = 0;
    for (let letter of string) {
        total += alphabetArray.indexOf(letter) + 1;
    }

    return total;
}




/* =============
Other Solutions
============= */
// Other solution #1
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
    /* From comments on this code: Why 96? What's the number for? :)
        Hint: 'a'.charCodeAt() === 97
*/