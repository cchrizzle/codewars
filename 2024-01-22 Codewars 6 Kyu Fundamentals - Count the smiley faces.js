// 1/22/24 Monday Codewars 6 Kyu Fundamentals - Count the smiley faces!

// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

*/




// 2nd try using arrays - working!
function countSmileys(arr) {
    if(arr.length === 0) {
        return 0;
    }

    let numOfSmileys = 0;
    let eyes = [':', ';'];
    let noses = ['-', '~'];
    let mouth = [')', 'D'];

    arr.forEach(element => {
        if(element.length === 2) {
            if(eyes.includes(element[0]) && mouth.includes(element[1])) {
                numOfSmileys += 1;
            }
        } else if(element.length === 3) {
            if(eyes.includes(element[0]) && noses.includes(element[1]) && mouth.includes(element[2])) {
                numOfSmileys += 1;
            }
        }
    })

    return numOfSmileys;

}





// 1st try - not working
function countSmileys(arr) {
    if(arr.length === 0) {
        return 0;
    }

    let numOfSmileys = 0;
    arr.forEach(ele => {
        if(ele.length === 2) {
            if( (ele[0] === ':' || ele[0] === ';') && (ele[1] === ')' || ele[1] === ']') ) {
                numOfSmileys += 1;
            }
        } else if(ele.length === 3) {
            if( (ele[0] === ':' || ele[0] === ';') && (ele[1] === '-' || ele[1] === '~') && (ele[2] === ')' || ele[2] === 'D') ) {
                numOfSmileys += 1;
            }
        }
    });

    return numOfSmileys;
}


/* =============
Other Solutions
============= */