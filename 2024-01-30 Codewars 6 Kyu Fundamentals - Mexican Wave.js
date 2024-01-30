// 1/30/24 Tuesday Codewars 6 Kyu Fundamentals - Mexican Wave

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

/*
Introduction

The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

Task

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

Rules

 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

Good luck and enjoy!
*/

// 2nd attempt
function wave(str) {
    // Create an array
    let waveArray = [];

    for(let i = 0; i < str.length; i++) {
        // Check for whitespace
        if(str[i] !== ' ') {
            // Create copy of string with i letter capitalized
            let waveString = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);

            // Push string to array
            waveArray.push(waveString);
        }
    }

    return waveArray;
}







// 1st attempt - not working
function wave(str){
    // Create an array
    let waveArray = [];
    // Array needs to be length of word - each letter gets capitalized once
    while(waveArray.length < str.length) {
        // Was deciding if I should use str.length or array.length, but doesn't matter since they're both same length
        for(let i = 0; i < str.length; i++) {
            let str = str.split('');

            if(i === 0) {
                waveArray.push(str[i].toUpperCase + str.splice(1, str.length - 1))
            } else if(i === 1) {
                waveArray.push(str.splice(0, i) + str[i].toUpperCase())
            } else {
                waveArray.push(str.splice(0, i) + str[i].toUpperCase() + str.splice(i, -1))
            }
        }
    }

    return waveArray;
}




/* =============
Other Solutions
============= */
function wave(str){
    let newArr = [];

    for (let i = 0; i < str.length; i++) {
      if(copy[i] !== ' ') {
        let copy = str.split('');
        copy[i] = copy[i].toUpperCase()
        newArr.push(copy.join(''))
      }
    }

    return newArr
}
// Another commenter's explanation: "Great solution! You split the string into individual characters inside the for loop and after that you create an if statement to see if there is any space characters in the string and if the character is a letter, then we do the following we capitalize the letter and then we push the result to a new array where the characters are joined together."