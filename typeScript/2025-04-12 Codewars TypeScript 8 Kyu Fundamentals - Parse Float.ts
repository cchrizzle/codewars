// 4/12/25 Saturday Codewars TypeScript 8 Kyu Fundamentals - Parse Float

// https://www.codewars.com/kata/57a386117cb1f31890000039/train/typescript

/*
Write function parseFloat which takes an input and returns a number or Nothing if conversion is not possible.
*/

// 3rd attempt - working!
export function parseF(s: string): number | null {
    if(isNaN(Number.parseFloat(s))) {
        return null;
    } else {
        return Number.parseFloat(s);
    }
}

// 2nd attempt - not working
export function parseF(s: string): number | null {
    if(isNaN(Number.parseFloat(s)) || isNaN(Number.parseInt(s))) {
        return null;
    } else {
        return parseInt(s);
    }
}

// 1st attempt - not working
export function parseF(s: string): number | null {
    if (parseFloat(s)) {
      return parseFloat(s);
    } else {
      return null;
    }
}
/* =============
Other Solutions
============= */

// Own practice
export function parseF(s: string): number | null {
    const parsedFloat = parseFloat(s);
    return isNaN(parsedFloat) ? null : parsedFloat;
}