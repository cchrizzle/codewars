// 7/1/25 Tuesday Codewars 7 Kyu Fundamentals - Dropcaps

// https://www.codewars.com/kata/559e5b717dd758a3eb00005a/train/javascript

/*
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   " 

Note: you will be provided atleast one word and should take string as input and return string as output.
*/

// Trying map - working!
function dropCap(n) {
    const splitN = n.split(' ');

    const dropCappedArr = splitN.map(word => (word.length > 2 ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word));

    return dropCappedArr.join(' ');
}

// Restarting thinking - not working
function dropCap(n) {
    const dropCappedArr = [];

    for (const word of n) {
        if (word.length > 2) {
            dropCappedArr.push(`${word[0].toUpperCase()}${word.slice(0).toLowerCase()}`);
        } else {
            dropCappedArr.push(`${word.toLowerCase()}`);
        }
    }

    return dropCappedArr.join('');
}

function dropCap(n) {
    const dropCappedArr = [];

    for (const word of n) {
        const splitWord = word.split('');

        if (splitWord.length > 2) {
            dropCappedArr.push(`${splitWord.slice(0, 1).toUpperCase()}${splitWord.slice(1).toLowerCase()}`);
        }
    }
}

// 1st attempt - not working
function dropCap(n) {
    const dropCappedArr = [];

    for (const word of n) {
        const splitWord = word.split('');
        if (splitWord.length > 2) {
            dropCappedArr.push(`${splitWord.charAt(0).toUpperCase()}${splitWord.slice(1)}.join(')`);
        } else {
            dropCappedArr.push(word.toLowerCase());
        }
    }

    return dropCappedArr.join('');
}

/* =============
Other Solutions
============= */
