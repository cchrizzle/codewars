// 6//4/25 Wednesday Codewars TS 7 Kyu Fundamentals - Cat and Mouse - Easy Version

// https://www.codewars.com/kata/57ee24e17b45eff6d6000164/train/typescript

/*
You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

"C.....m" returns "Escaped!" <-- more than three characters between

"C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.
*/

// 2nd attempt
export function catMouse(x: string): string {
    const distance = x.slice(1, x.length - 1).length;

    if (distance > 3) {
        return 'Escaped!';
    } else {
        return 'Caught!';
    }
}

// First attempt - not working, should be x.length - 1 since slice doesn't include last paramter [)
export function catMouse(x: string): string {
    const distance = x.slice(1, x.length - 2).length;

    if (distance > 3) {
        return 'Escaped!';
    } else {
        return 'Caught!';
    }
}

/* =============
Other Solutions
============= */
export function catMouse(x: string): string {
    return x.length > 5 ? 'Escaped!' : 'Caught!';
}
