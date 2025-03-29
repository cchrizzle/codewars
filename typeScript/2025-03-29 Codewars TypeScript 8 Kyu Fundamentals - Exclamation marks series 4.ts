// 3/29/25 Saturday Codewars TypeScript 8 Kyu Fundamentals - Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/typescript

/*
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
Examples

"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"

*/

// Code
export function remove(s: string): string {
    let removed = '';
    for (const letter of s) {
        if (letter != '!') {
            removed += letter;
        }
    }

    return removed + '!';
}

/* =============
Other Solutions
============= */
export function remove(s: string): string {
    return s.replaceAll('!', '') + '!';
}