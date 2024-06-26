// 6/25/24 Tuesday Codewars 7 Kyu Fundamentals - Sort the Gift Code

// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript

/*
Happy Holidays fellow Code Warriors!

Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?
Sort the Gift Code

Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
Examples (Input -- => Output):

"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
*/
// 3rd attempt - working
function sortGiftCode(code){
    return [...code].sort().join('');
}


// 2nd attempt - not working
function sortGiftCode(code) {
    return code.split('').sort((a, b) => a - b).join('');   // .sort((a, b) => a - b) isn't working, but just .sort() is -- because .sort((a, b) => a - b) is for arrays of numbers
}


// 1st attempt - not working
function sortGiftCode(code){
    return [...code].sort((a, b) => a - b).join('');
}




/* =============
Other Solutions
============= */