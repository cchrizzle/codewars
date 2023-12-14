// 12/14/23 Tuesday Codewars 8 Kyu Fundamentals - Add Length

// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

*/




// 3rd attempt
function addLength(str) {
    // New array to add final elements
    const finalItems = [];
    // Split string into array
    const splitStr = str.split(' ');
    // Count letters in each word - start count at 0
    for(let i = 0; i < splitStr.length; i++) {
        let letterCount = 0;        // Moved letterCount inside function to reset with each word

        for(let j = 0; j < splitStr[i].length; j++) {
            letterCount += 1;
        }
        finalItems.push(`${splitStr[i]} ${letterCount}`);
    }
    return finalItems;
}




// 2nd attempt
function addLength(str) {
    // New array to add final elements
    const finalItems = [];
    // Split string into array
    str.split(' ');
    // Count letters in each word - start count at 0
    let letterCount = 0;
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < str[i].length; j++) {
            letterCount += 1;
        }
        finalItems.push(str + letterCount);
    }
    return finalItems;
}




// 1st attempt

function addLength(str) {
    // New array to add final elements
    const finalItems = [];
    // Split string into array
    str.split(' ');
    // Count letters in each word - start count at 0
    let letterCount = 0;
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < str[j].length; j++) {
            letterCount += 1;
        }
        finalItems.push(str + letterCount);
    }
    return finalItems;
}
/*
Basic tests
Testing for "apple ban"
expected [ 'apple ban1', 'apple ban2', …(7) ] to deeply equal [ 'apple 5', 'ban 3' ]
Completed in 3ms
Testing for "you will win"
expected [ 'you will win1', …(11) ] to deeply equal [ 'you 3', 'will 4', 'win 3' ]
Testing for "you"
expected [ 'you1', 'you2', 'you3' ] to deeply equal [ 'you 3' ]
*/




/* =============
Other Solutions
============= */
function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
}