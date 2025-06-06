// 6/5/24 Thursday Codewars TS 7 Kyu Fundamentals - All Star Code Challenge #22

// https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/typescript

/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #22

Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"

For example:

3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"
*/

export function toTime(seconds: number): string {
    if (seconds < 3600) {
        return `0 hour(s) and ${Math.floor(seconds / 60)} minute(s)`;
    } else {
        const remainingSeconds = seconds % 3600;
        const remainingMinutes = Math.floor(remainingSeconds / 60);
        return `${Math.floor(seconds / 3600)} hour(s) and ${remainingMinutes} minute(s)`;
    }
}

/* =============
Other Solutions
============= */
export function toTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours} hour(s) and ${minutes} minute(s)`;
}
