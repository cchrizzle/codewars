// 11/02/23 Thursday Codewars 8 Kyu Fundamentals - Are You Playing Banjo?

// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
*/




function areYouPlayingBanjo(name) {
    if(name.split('')[0].toLowerCase() === 'r') {                   // From other solutions: don't need to split first, can go straight into name[0].toLowerCase()
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}

/* =============
Other Solutions
============= */
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }