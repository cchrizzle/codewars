<<<<<<< HEAD
// 4/9/25 Wednesday Codewars TypeScript 8 Kyu Fundamentals - Training JS #29: methods of arrayObject---concat() and join()

// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/typescript

/*
Task

Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

Some example:

bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
*/

// Code
export function bigToSmall(arr: number[][]): string {
    // Flatten array
    const flatArr = arr.flat();

    // Descending order
    const descending = flatArr.sort((a, b) => b - a);

    // Return answer with ">" separator
    return descending.join('>');
};

/* =============
Other Solutions
============= */
// Using concat
export function bigToSmall(arr: any[]): string {
    return [].concat(...arr).sort((a, b) => b - a).join('>');
=======
// 4/9/25 Wednesday Codewars TypeScript 8 Kyu Fundamentals - Training JS #29: methods of arrayObject---concat() and join()

// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/typescript

/*
Task

Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

Some example:

bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
*/

// Code
export function bigToSmall(arr: number[][]): string {
    // Flatten array
    const flatArr = arr.flat();

    // Descending order
    const descending = flatArr.sort((a, b) => b - a);

    // Return answer with ">" separator
    return descending.join('>');
};

/* =============
Other Solutions
============= */
// Using concat
export function bigToSmall(arr: any[]): string {
    return [].concat(...arr).sort((a, b) => b - a).join('>');
>>>>>>> f8ce5e1fec6a5e568b0e736be41a6fd8bff61940
}