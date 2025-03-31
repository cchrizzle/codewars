// 3/30/25 Sunday Codewars TypeScript 8 Kyu Fundamentals - Find Nearest Square Number

// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/typescript

/*
Your task is to find the nearest square number of a positive integer n. In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

For example, if n = 111, then the nearest square number equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If n is already a perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Good luck :)
*/

export function nearestSq(n : number) : number {
    if (Number.isInteger(Math.sqrt(n)) ) {
        return n;
    } else {
        const floor = Math.floor(Math.sqrt(n));
        const floorSq = floor ** 2;
        const floorDiff = Math.abs(n - floorSq);
        
        const ceil = Math.ceil(Math.sqrt(n));
        const ceilSq = ceil ** 2;
        const ceilDiff = Math.abs(n - ceilSq);

        if (floorDiff < ceilDiff) {
            return floorSq;
        } else {
            return ceilSq;
        }
    }
}

/* =============
Other Solutions
============= */
export function nearestSq(n : number) : number {
    return Math.round(n ** 0.5) ** 2
}