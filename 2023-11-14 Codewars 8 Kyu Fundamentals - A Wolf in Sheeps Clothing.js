// 11/14/23 Tuesday Codewars 8 Kyu Fundamentals - A Wolf in Sheep's Clothing

// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

/*
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
Examples

Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

*/




// 2nd attempt - working
function warnTheSheep(queue) {
    if(queue.indexOf('wolf') === queue.length - 1) {                    // Forgot to put queue in front of "indexOf"
        return 'Pls go away and stop eating my sheep'
    } else {
        let reversedQueue = queue.reverse();
        let wolfIndex = queue.indexOf('wolf');
        return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`
    }
}





// 1st attempt
function warnTheSheep(queue) {
    if(indexOf('wolf') === queue.length - 1) {
        return 'Pls go away and stop eating my sheep'
    } else {
        let reversedQueue = queue.reverse();
        let wolfIndex = indexOf('wolf');
        return `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`
    }
}




/* =============
Other Solutions
============= */
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}


// Second solution
function warnTheSheep(queue) {
    const position = [...queue].reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}