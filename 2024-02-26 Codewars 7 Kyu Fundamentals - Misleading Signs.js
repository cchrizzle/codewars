// 2/26/24 Monday Codewars 7 Kyu Fundamentals - Misleading Signs

// https://www.codewars.com/kata/65dd5b414ccda60a4be32c2a/train/javascript

/*
You order a shirt for your friend that has a word written in sign language on it, you would like to fool your friend into thinking it says something other than what it actually says.

Your friend is smart, but he can't know what he doesn't already know, he only knows a certain amount of letters in sign language. Given the word on the shirt, the word you are attempting to make your friend believe is on the shirt, and the letters in sign language your friends knows, figure out if he can tell that you are fooling him. Return true if your friend can figure out you are fooling him, otherwise return false.

It is guaranteed that both words will be the same length and will be in lowercase letters (a-z)

Example 1:
Word on shirt: snack
Word you said: snake
Letters your friend knows: [c]

return true
Your friend knows the 4th letter is a c rather than a k.

If the word on the shirt and the word you told your friend is the same then you aren't fooling your friend, so you should return false

Example 2:
Word on shirt: snack
Word you said: snack
Letters your friend knows: [s, n, a, c, k]

return false 
Since you are not fooling your friend

Example 3:
Word on shirt: snake
Word you said: snack
Letters your friend knows: [c]

return true 
Your friend knows that the 4th letter is not a c
*/

/* =============================================================
 Couldn't figure, looked at solutions
 ============================================================= */


// Prompt a bit confusing: true means friend can figure out you're tricking them, false means more they are getting fooled (ignore false example given)


function gaslighting(shirtWord,yourWord,friendsLetters) {
    // compare shirt letters to letters friend knows
    if (shirtWord.includes(friendsLetters))
    return true || false ;
}




/* =============
Other Solutions
============= */
function gaslighting(shirtWord,yourWord,friendsLetters) {
    const shirtWordLen = shirtWord.length
    const friendsLettersLen = friendsLetters.length
    
    // for each letter in the shirt word
    for (let i = 0; i < shirtWordLen; i++) {
      // if the letter is different from the same position letter in your word
      if (shirtWord[i] != yourWord[i]) {
        // check if the different letters are part of the known letters
        for (let x = 0; x < friendsLettersLen; x++) {
          // if the letters are known friends will know
          if (shirtWord[i] === friendsLetters[x] || yourWord[i] === friendsLetters[x]) {
            return true;
          }
        }
      }
    }
    return false;
}