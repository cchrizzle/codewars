// 1/17/24 Wednesday Codewars 6 Kyu Fundamentals - Take a Ten Minutes Walk

// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/




// Testing adding toLowerCase() to entire string to save some processing time from converting toLowerCase() in each "if" statement





// 2nd attempt - working, didn't account separately for NS and EW in previous attempt
function isValidWalk(walk) {
    if(walk.length !== 10) {
        return false;
    }

    let accumulatorNS = 0;
    let accumulatorEW = 0;
    walk.forEach(direction => {
        direction = direction.toLowerCase();
        if(direction === 'n') {
            accumulatorNS += 1;
        } else if(direction === 's') {
            accumulatorNS -= 1;
        } else if(direction === 'e') {
            accumulatorEW += 1;
        } else if(direction === 'w') {
            accumulatorEW -= 1;
        }
    });

    return accumulatorNS === 0 && accumulatorEW === 0;
}





// 1st attempt - not working
function isValidWalk(walk) {
    if(walk.length !== 10) {
        return false;
    }

    let accumulator = 0;
    walk.forEach(direction => {
        if(direction === 'n' || direction === 'e') {
            accumulator += 1;
        } else if(direction === 's' || direction === 'w') {
            accumulator -= 1;
        }
    });

    return accumulator === 0;
}




/* =============
Other Solutions
============= */
function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
}