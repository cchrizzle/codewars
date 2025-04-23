// 4/23/25 Wednesday Codewars TypeScript 8 Kyu Fundamentals - Maximum Triplet Sum (Array Series #7) 

// https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/typescript

/*
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
Notes :

    Array/list size is at least 3 .

    Array/list numbers could be a mixture of positives , negatives and zeros .

    Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
    Input >> Output Examples

1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)

Explanation:

    As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

    Note : duplications are not included when summing , (i.e) the numbers added only once .

    2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)

    Explanation:

    As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,

    Note : duplications are not included when summing , (i.e) the numbers added only once .

    3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)

    Explanation:

    As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,

    Note : duplications are not included when summing , (i.e) the numbers added only once .
    
    Playing with Numbers Series (https://www.codewars.com/collections/playing-with-numbers)
    Playing With Lists/Arrays Series (https://www.codewars.com/collections/playing-with-lists-slash-arrays)
    For More Enjoyable Katas (http://www.codewars.com/users/MrZizoScream/authored)
*/
// 3rd attempt
export function maxTriSum(nums: number[]): number {
    const unique = new Set(nums);
    const uniqueArray = [...unique];

    const sorted = uniqueArray.sort((a, b) => b - a);

    let total = 0;

    for(let i = 0; i < 3; i++) {
        total += sorted[i];
    }

    return total;
}


// 2nd attempt - not working
export function maxTriSum(nums: number[]): number {
    const sortNums: number[] = nums.sort((a, b) => b - a);
    const sortedSet: number[] = new Set(sortNums);


    return sortedSet[0] + sortedSet[1] + sortedSet[2];
}



// 1st attempt - not working
export function maxTriSum(nums: number[]): number {
    const sortNums = nums.sort((a, b) => b - a);
    const sortedSet = new Set(sortNums);


    return sortedSet[0] + sortedSet[1] + sortedSet[2];
}
/* =============
Other Solutions
============= */
// Other solution - used spread operator in array brackets in order to utilize array methods.
export const maxTriSum = (nums: number[]): number => [...new Set(nums)].sort((a, b) => b - a).slice(0, 3).reduce((acc, val) => acc + val, 0);