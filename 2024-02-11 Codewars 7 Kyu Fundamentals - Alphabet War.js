// 2/11/24 Sunday Codewars 7 Kyu Fundamentals - Alphabet War

// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

/*
Introduction

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
Task

Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1

The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1

The other letters don't have power and are only victims.
Example

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

Alphabet war Collection
Alphavet war (https://www.codewars.com/kata/59377c53e66267c8f6000027)
Alphabet war - airstrike - letters massacre (https://www.codewars.com/kata/5938f5b606c3033f4700015a)
Alphabet wars - reinforces massacre (https://www.codewars.com/kata/alphabet-wars-reinforces-massacre)
Alphabet wars - nuclear strike (https://www.codewars.com/kata/59437bd7d8c9438fb5000004)
Alphabet war - Wo lo loooooo priests join the war (https://www.codewars.com/kata/59473c0a952ac9b463000064)
*/

// 2nd try
function alphabetWar(fight) {
    let leftSide = {
        w: 4,
        p: 3,
        b: 2,
        s: 1
    }

    let rightSide = {
        m: 4,
        q: 3,
        d: 2,
        z: 1
    }

    let total = 0;

    for(let letter of fight) {
        if(letter in leftSide) {
            total += leftSide[letter];
        } else if(letter in rightSide) {
            total -= rightSide[letter];
        }
    }

    if (total > 0) {
        return 'Left side wins!';
    } else if (total < 0) {
        return 'Right side wins!';
    } else {
        return "Let\'s fight again!";       // Escaped '
    }
}


// 1st try - not working
function alphabetWar(fight) {
    let leftSide = {
        w: 4,
        p: 3,
        b: 2,
        s: 1
    }

    let rightSide = {
        m: 4,
        q: 3,
        d: 2,
        z: 1
    }

    let total = 0;

    for(let letter in fight) {
        if(fight[letter] in leftSide) {
            total += leftSide[letter];
        } else if(fight[letter] in rightSide) {
            total -= rightSide[letter];
        }
    }

    if (total > 0) {
        return 'Left side wins!';
    } else if (total < 0) {
        return 'Right side wins!';
    } else {
        return "Let's fight again!";        // need to escape '
    }
}




/* =============
Other Solutions
============= */
function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}