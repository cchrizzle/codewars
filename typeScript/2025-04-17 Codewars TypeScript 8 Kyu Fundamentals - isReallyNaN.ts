// 4/17/25 Thursday Codewars TypeScript 8 Kyu Fundamentals - isReallyNaN

// https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/typescript

/*
I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

Any solution is acceptable!
*/

// 3rd attempt - working!
export function isReallyNaN(val: any): boolean {
    return Number.isNaN(val);
}

// 2nd attempt - not working
export function isReallyNaN(val: any): boolean {
    if (val === undefined) {
        return false;
    }
    return isNaN(val);
}

// 1st attempt - not working: challenge requires undefined to return false
export function isReallyNaN(val: any): boolean {
    return isNaN(val);
}

/* =============
Other Solutions
============= */
export function isReallyNaN(val: any): boolean {
    return val !== val
};
// "NaN is defined in such a way that it is not equal to itself. Nothing else in java/typescript has this property."
