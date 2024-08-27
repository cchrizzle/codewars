// 8/26/24 Monday Codewars 8 Kyu Fundamentals - Color Ghost

// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/train/javascript

/*
Color Ghost

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

class Ghost {
    constructor() {
        const colors = ['white', 'yellow', 'purple', 'red'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
}




/* =============
Other Solutions
============= */
// Other solution #1 - I really like how they set it up
var Ghost = function() {
    this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};