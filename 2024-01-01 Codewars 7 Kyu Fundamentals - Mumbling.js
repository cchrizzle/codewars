// 1/1/24 Monday Codewars 7 Kyu Fundamentals - Mumbling

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/




// 2nd attempt
function accum(s) {
	let splitString = s.split('');
    let newString = [];

    for(let i = 0; i < splitString.length; i++) {
        newString.push(splitString[i].repeat(i + 1));
    }

    // newString.map(element => element.charAt(0).toUpperCase() + element.slice(1)).join('-');     // forgot to add parenthesis after toUpperCase -_- -- commented out to paste in next line: .map doesn't modify original array, so need to assign

    newString = newString.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()).join('-');       // added toLowerCase

    return newString;
}





// 1st attempt - not working
function accum(s) {
	let splitString = s.split('');
    let newString = [];

    for(let i = 0; i < splitString.length; i++) {
        newString.push(splitString[i].repeat(i + 1));
    }

    newString.map(element => element.charAt(0).toUpperCase + element.slice(1));

    newString = newString.join('-');

    return newString;
}
// "expected 'Z-pp-ggg-llll-nnnnn-RRRRRR-xxxxxxx-qqqqqqqq-eeeeeeeee-nnnnnnnnnn-UUUUUUUUUUU' to equal 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu'"




/* =============
Other Solutions
============= */