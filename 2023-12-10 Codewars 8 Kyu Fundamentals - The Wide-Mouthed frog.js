// 12/10/23 Sunday Codewars 8 Kyu Fundamentals - The Wide-Mouthed frog! 

// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript

/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

*/

function mouthSize(animal) {
    if(animal.toLowerCase() === 'alligator') {return 'small'}
    return 'wide';
}






// As arrow function
// 2nd attempt
const mouthSize = animal => {
    if (animal.toLowerCase() === 'alligator') {     // Implicit return only works with single expressions
        return 'small';
    }
    return 'wide';
}




// 1st attempt
const mouthSize = animal => {
    if(animal.toLowerCase() === 'alligator') 'small';
    return 'wide';
}