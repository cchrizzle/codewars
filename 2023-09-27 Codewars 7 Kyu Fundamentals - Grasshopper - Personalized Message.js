// 9/27/23 Wednesday Codewars 7 Kyu Fundamentals - Grasshopper - Personalized Message

// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript

/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case 	return
name equals owner 	'Hello boss'
otherwise 	'Hello guest'
*/

function greet (name, owner) {
    if (name === owner) return 'Hello boss';
    if (name != owner) return 'Hello guest';
}

// As ternary
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'


/* =============
Other Solutions
============= */