// 7/23/25 Wednesday Codewars TS 7 Kyu Fundamentals - Help Bob count letters and digits.

// https://www.codewars.com/kata/5738f5ea9545204cec000155/train/typescript

/*
Bob is a lazy man.

He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1
*/

export function countLettersAndDigits(input: string): number {
    const lettersAndNumbers: string = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let lettersNumbersCount: number = 0;

    for (const digit of input) {
        const lowercaseDigit: string = digit.toLowerCase();

        if (lettersAndNumbers.includes(lowercaseDigit)) {
            lettersNumbersCount += 1;
        }
    }

    return lettersNumbersCount;
}

/* =============
Other Solutions
============= */
// REgex solutions
// #1
export function countLettersAndDigits(input: string): number {
    return (input.match(/[a-z0-9]/gi) || []).length;
}

// #2
export function countLettersAndDigits(input: string): number {
    return input.replace(/[^A-Za-z0-9]/g, '').length;
}

// #3
export function countLettersAndDigits(input: string): number {
    return input.split('').filter(i => /[^\W_]/.test(i)).length;
}
