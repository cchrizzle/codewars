// 5/7/25 Wednesday Codewars TS 7 Kyu Fundamentals - Minimize Sum Of Array (Array Series #1)

// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/typescript

/*
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series (https://www.codewars.com/collections/playing-with-lists-slash-arrays)


Task

Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
Notes

    Array/list will contain positives only .
    Array/list will always have even size

Input >> Output Examples

minSum({5,4,2,3}) ==> return (22) 

Explanation:

    The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

minSum({12,6,10,26,3,24}) ==> return (342)

Explanation:

    The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

minSum({9,2,8,7,5,4,0,6}) ==> return (74)

Explanation:

    The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74

*/

export function minSum(arr: number[]): number {
    const sorted = arr.sort((a, b) => a - b);

    let total = 0;
    for (let i = 0; i < sorted.length / 2; i++) {
        total += sorted[i] * sorted[sorted.length - (i + 1)];
    }
    return total;
}

/* =============
Other Solutions
============= */
export function minSum(arr: number[]) {
    return [...arr]
      .sort((a, b) => a - b)
      .reduce((sum, x, _, sorted) => sum + x * sorted.pop()!, 0);
}