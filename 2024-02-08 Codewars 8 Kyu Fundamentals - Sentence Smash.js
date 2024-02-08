// 2/8/24 Thursday Codewars 8 Kyu Fundamentals - Sentence Smash

// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

/*
Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

function smash (words) {
    return words.join(' ');
}


// As arrow function
const smash = words => words.join(' ');
// For an arrow function it's best to use const, using let the variable can be overwritten and the function will no longer work.


/* =============
Other Solutions
============= */