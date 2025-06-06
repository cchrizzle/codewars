// 5/21/25 Codewars TS 7 Kyu Fundamentals - Two Numbers Are Positive

// https://www.codewars.com/kata/602db3215c22df000e8544f0/train/typescript

/*
Task:

Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.
Examples:

two_are_positive(2, 4, -3) == True
two_are_positive(-4, 6, 8) == True
two_are_positive(4, -6, 9) == True
two_are_positive(-4, 6, 0) == False
two_are_positive(4, 6, 10) == False
two_are_positive(-14, -3, -4) == False
*/

export function twoArePositive(a: number, b: number, c: number): boolean {
    const sorted = [a, b, c].sort((a, b) => a - b);

    if (sorted[0] > 0) {
        return false;
    }

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] <= 0) {
            return false;
        }
    }

    return true;
}

/* =============
Other Solutions
============= */
export function twoArePositive(a: number, b: number, c: number): boolean {
    return [a, b, c].filter(num => num > 0).length == 2;
}