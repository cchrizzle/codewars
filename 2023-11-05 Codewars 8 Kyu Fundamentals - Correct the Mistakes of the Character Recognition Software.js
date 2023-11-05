// 11/5/23 Sunday Codewars 8 Kyu Fundamentals - Correct the mistakes of the character recognition software

// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.
*/




// 2nd attempt - working
function correct(string) {
    // Split string into array to iterate
    let splitString = string.split('');

    // Iterate through array and replace if 5, 0, or 1
    let correctedSplitString = splitString.map(letter => {
        if(letter === '5') return 'S';
        else if(letter === '0') return 'O';
        else if(letter === '1') return 'I';
        return letter;
    });

    return correctedSplitString.join('');
}





// 1st attempt
function correct(string) {
    // split string into array to iterate
	let splitString = string.split('');

    // iterate through array and replace if 5, 0, or 1
    let correctedSplitString = splitString.forEach(letter => {
        if(letter === 5) letter = 'S';
        else if(letter === 0) letter = 'O';
        else if(letter === 1) letter = 'I';
    });

    return correctedSplitString;
}
// Not working: "expected undefined to equal 'LONDON'"








// Practicing objects
function correct(string) {
    let corrections = {
        '5': 'S',
        '0': 'O',
        '1': 'I'
    }

    let splitString = string.split('');

    splitString.map(element => {
        if(element in corrections) {
            return corrections[element]
        }
    })
}
// Stuck - asking ChatGPT for help
/*
    1. The map method creates a new array based on the results of the provided function, but you need to capture this new array to return the corrected characters.

    2. In your current code, you are using map, but you are not storing the result anywhere or returning it. You need to store the corrected characters in a new array and return that new array.

    3. Since you are using an object for corrections, make sure to check if the character exists in the corrections object before trying to replace it.

    4. The return statement inside the map callback should return the corrected character if it exists in the corrections object, and the original character if it doesn't match any correction.

    5. To obtain the final corrected string, you need to convert the corrected array back into a string.
*/




// Post advice - WORKING!!
function correct(string) {
    let corrections = {
        '5': 'S',
        '0': 'O',
        '1': 'I'
    }

    let splitString = string.split('');

    let correctedArray = splitString.map(element => {
        if(element in corrections) {
            return corrections[element];
        } return element;
    })
    return correctedArray.join('');
}



/* =============
Other Solutions
============= */