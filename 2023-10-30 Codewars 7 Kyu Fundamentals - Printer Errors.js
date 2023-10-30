// 10/30/23 Monday Codewars 7 Kyu Fundamentals - Printer Errors

// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
Examples:

s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

*/




// 4th attempt - working
function printerError(s) {
    const splitString = s.split('');
    let errors = 0;

    splitString.forEach(value => {
        if (value !== 'a' && value !== 'b' && value !== 'c' && value !== 'd' && value !== 'e' && value !== 'f' && value !== 'g' && value !== 'h' && value !== 'i' && value !== 'j' && value !== 'k' && value !== 'l' && value !== 'm') {
          errors += 1;
        }
      });

    let errorsString = String(errors);
    let splitStringLengthToString = String(splitString.length);

    return `${errorsString}/${splitStringLengthToString}`;
}

/* =============
Other Solutions
============= */
function printerError(s) {
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}




// 3rd attempt
function printerError(s) {
    const splitString = s.split('');
    let errors = 0;

    splitString.forEach(value => {
        if (value !== 'a' && value !== 'b' && value !== 'c' && value !== 'd' && value !== 'e' && value !== 'f' && value !== 'g' && value !== 'h' && value !== 'i' && value !== 'j' && value !== 'k' && value !== 'l' && value !== 'm') {
          errors += 1;
        }
      });

    let errorsString = String(errors);
    let splitStringLengthToString = String(splitString.length);

    return errorsString/splitStringLengthToString;
}




// 2nd attempt - String function isn't working: "expected '0.05357142857142857' to equal '3/56'"
function printerError(s) {
    const splitString = s.split('');
    let errors = 0;

    splitString.forEach(value => {
        if (value !== 'a' && value !== 'b' && value !== 'c' && value !== 'd' && value !== 'e' && value !== 'f' && value !== 'g' && value !== 'h' && value !== 'i' && value !== 'j' && value !== 'k' && value !== 'l' && value !== 'm') {
          errors += 1;
        }
      });

    return String(errors/splitString.length);
}





// 1st attempt
function printerError(s) {
    const splitString = s.split('');
    let errors = 0;

    for(let i = 0; i < splitString.length; i++) {
        if(splitString[i] !== 'a' || splitString[i] !== 'b' || splitString[i] !== 'c' || splitString[i] !== 'd' || splitString[i] !== 'e' || splitString[i] !== 'f' || splitString[i] !== 'g' || splitString[i] !== 'h' || splitString[i] !== 'i' || splitString[i] !== 'j' || splitString[i] !== 'k' || splitString[i] !== 'l' || splitString[i] !== 'm';) {
            errors += 1;
        }
    }

    return String(errors/splitString.length)
}