// 11/9/23 Thursday Codewars 6 Kyu Fundamentals - Replace With Alphabet Position

// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/




// 3rd attempt - working
function alphabetPosition(text) {
    let alphabetPosition = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
      m: 13,
      n: 14,
      o: 15,
      p: 16,
      q: 17,
      r: 18,
      s: 19,
      t: 20,
      u: 21,
      v: 22,
      w: 23,
      x: 24,
      y: 25,
      z: 26
    }
    let convertedArray = text
        .split('')
        .map(letter => {
            if(letter.toLowerCase() in alphabetPosition) {
                letter = letter.toLowerCase();          // Needed to define toLowerCase() as well for matching to key
                return alphabetPosition[letter];
            } else {
                return undefined;       // Skip non-letters
            }
        })
        .filter(val => val !== undefined)   // Remove undefined
        .join(' ');
    return convertedArray;
}




// 2nd attempt
function alphabetPosition(text) {
    let alphabetPosition = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
      m: 13,
      n: 14,
      o: 15,
      p: 16,
      q: 17,
      r: 18,
      s: 19,
      t: 20,
      u: 21,
      v: 22,
      w: 23,
      x: 24,
      y: 25,
      z: 26
    }
    let convertedArray = text
        .split('')
        .map(letter => {
            if(letter.toLowerCase() in alphabetPosition) {
                letter = letter.toLowerCase();          // Needed to define toLowerCase() as well for matching to key
                return alphabetPosition[letter];
            }
        })
        .join(' ');
    return convertedArray;
}
// not working - need to get rid of spaces: expected '20 8 5  19 21 14 19 5 20  19 5 20 19  1 20  20 23 5 12 22 5  15   3 12 15 3 11 ' to equal '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'




// 1st attempt
function alphabetPosition(text) {
    let alphabetPosition = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
      m: 13,
      n: 14,
      o: 15,
      p: 16,
      q: 17,
      r: 18,
      s: 19,
      t: 20,
      u: 21,
      v: 22,
      w: 23,
      x: 24,
      y: 25,
      z: 26
    }
    let convertedArray = text
        .split('')
        .map(letter => {
            if(letter.toLowerCase() in alphabetPosition) {
                return alphabetPosition[letter];
            }
        })
        .join(' ');
    return convertedArray;
}
// not working - toLowerCase() isn't applying and need to find way to skip spaces: "expected ' 8 5  19 21 14 19 5 20  19 5 20 19  1 20  20 23 5 12 22 5  15   3 12 15 3 11 ' to equal '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'"



/* =============
Other Solutions
============= */
function alphabetPosition(text) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.toLowerCase().split('')
    .filter( letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    }  )
    .map( letter => alphabet.indexOf(letter) + 1 )
    .join(' ')
}



// Slightly cleaner version of above
function alphabetPosition(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    
    return text.toLowerCase()
               .split('')
               .filter(t => letters.indexOf(t) > -1)
               .map(t => letters.indexOf(t)+1 || '')
               .join(' ');
}
// Comments
    // 1. "what's the point of "-1"? could anyone tell me?" - "If an element is not in a string / array, .indexOf(element) returns -1."
    /* 2. "in this particular excercise why you put the || statement?
            .map(t=> letters.indexOf(t)+1) || ''
        i mean, i think isnt neccesary for the filter you did before that, so always will find the indexOf the letter in the position" - "It's not necessary."