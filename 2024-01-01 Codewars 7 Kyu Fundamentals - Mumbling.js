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
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}




// 2nd solution
function accum(str) {
	var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}
    /* The Array function is used to create a new array. It is capitalized because it is the standard for constructor functions to be capitalized.

    Array(2) creates an array of 2 blank values.

    In this case it is being used to create an empty array and join the array together using whichever character is being iterated over in the loop. Since there are no contents in the array, using this with the join() function works like a multiplier for the character being passed into join. For example Array(3).join("x") would evaluate to xx. You need one more item in the array since join() adds characters between array objects, so three empty arrays would be seperated by 2 join characters.
    */

    /*
    Basically a new Array is being defined with a given length, and it's an empty array. Then this empty array is being joined, with a given letter joining the empty indexes. For example, for i = 2, the Array has 3 empty indexes: [,,] and then it is joined by whatever letter is in letters[i]. Say letters[2] equals the letter a. Then if we join the empty array together with the letter in between each empty index, you get "aa".
    */
