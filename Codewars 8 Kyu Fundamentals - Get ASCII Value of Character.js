// 6/18/25 Codewars 8 Kyu Fundamentals - Get ASCII Value of Character

// https://www.codewars.com/kata/55acfc59c3c23d230f00006d/train/javascript

/*
Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/
*/

// 2nd attempt - working
function getASCII(c) {
    return c.charCodeAt(0);
}

// 1st attempt - wrong, "getCharCodeAt" isn't a method
function getASCII(c) {
    return c.getCharCodeAt(0);
}
