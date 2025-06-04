// Tuesday 6/3/25 Codewars TS 7 Kyu Fundamentals - Shorter Concat [Reverse Longer]

// https://www.codewars.com/kata/54557d61126a00423b000a45/train/typescript

/*
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b

*/

export function shorterReverseLonger(a: string, b: string): string {
    let longer;
    let shorter;

    if (a.length >= b.length) {
        longer = a;
        shorter = b;
    } else {
        longer = b;
        shorter = a;
    }

    const splitReverseLonger = longer.split('').reverse().join('');

    return `${shorter}${splitReverseLonger}${shorter}`;
}

/* =============
Other Solutions
============= */
export function shorterReverseLonger(a: string, b: string): string {
    let shorter = b;
    let longer = a;

    if (a.length < b.length) {
        shorter = a;
        longer = b;
    }

    return shorter + longer.split('').reverse().join('') + shorter;
}
