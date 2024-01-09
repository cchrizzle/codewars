// 1/9/23 Tuesday Codewars 6 Kyu Fundamentals - Counting Duplicates

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/




// 3rd attempt - working
function duplicateCount(text){
    // make object to count all duplicates
    let count = {};

    // split string and convert letters to lowercase since case-insensitive
    let splitText = text.toLowerCase().split('');

    // iterate through split string and count in object
    splitText.forEach(element => {
        if(element in count) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    });

    // count duplicates
    let duplicates = 0;
    for(let char in count) {                    // was using "if" instead of "for"
        if(count[char] > 1) {
            duplicates += 1;
        }
    }

    // return duplicates;
    return duplicates;
}




// 2nd attempt - not working
function duplicateCount(text){
    // make object to count all duplicates
    let count = {};

    // split string and convert letters to lowercase since case-insensitive
    let splitText = text.toLowerCase().split('');

    // iterate through split string and count in object
    splitText.forEach(element => {
        if(element in count) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    });

    // count duplicates
    let duplicates = 0;
    if(let char in count) {
        if(count[char] > 1) {
            duplicates += 1;
        }
    }

    // return duplicates;
    return duplicates;
}




// 1st attempt - not working
function duplicateCount(text){
    // make object to count all duplicates
    let count = {};

    // split string and convert letters to lowercase since case-insensitive
    let splitText = text.toLowerCase().split('');

    // iterate through split string and count in object
    splitText.forEach(element => {
        if(element in count) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    });

    // count duplicates
    let duplicates = 0;
    if(char in count) {                 // char not defined
        if(count[char] > duplicates) {
            duplicates = count[char];
        }
    }

    // return duplicates;
    return duplicates;
}




/* =============
Other Solutions
============= */