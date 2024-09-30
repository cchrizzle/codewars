// 9/30/24 Monday Codewars 7 Kyu Fundamentals - Sort Out The Men From Boys 

// https://www.codewars.com/kata/5af15a37de4c7f223e00012d/train/javascript

/*
    Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

    Array/list size is at least 4 .

    Array/list numbers could be a mixture of positives , negatives .

    Have no fear , It is guaranteed that no Zeroes will exists . !alt

    Repetition of numbers in the array/list could occur , So (duplications are not included when separating).
    Input >> Output Examples:

menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 

Explanation:

Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .

menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})

Explanation:

    Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending order *, then the odds in descending order { -99 }

    Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared in the final array/list .

menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})

Explanation:

    Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds in descending order { 281 , 49 , -1 }

    Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the final array/list . 
*/

// 3rd attempt - working
function menFromBoys(arr){
    let evensAscendingSet = new Set(arr.filter(ele => ele % 2 === 0).sort((a, b) => a - b));
    let oddsDescendingSet = new Set(arr.filter(ele => ele % 2 !== 0).sort((a, b) => b - a));

    return [...evensAscendingSet, ...oddsDescendingSet]
}




// 2nd attempt - not working, can't be any duplicates
function menFromBoys(arr){
    let evensAscending = arr.filter(ele => ele % 2 === 0).sort((a, b) => a - b);
    let oddsDescending = arr.filter(ele => ele % 2 !== 0).sort((a, b) => b - a);

    return [...evensAscending, ...oddsDescending]
}




// 1st attempt - not working; returning spread arrays as arrays still
function menFromBoys(arr){
    let evensAscending = arr.filter(ele => ele % 2 === 0).sort((a, b) => a - b);
    let oddsDescending = arr.filter(ele => ele % 2 !== 0).sort((a, b) => b - a);

    return [[...evensAscending], [...oddsDescending]]
}




/* =============
Other Solutions
============= */
// Other solution #1
function menFromBoys(arr){
    let evens = []
    let odds = []
    let set = new Set(arr)
    for (let item of set) {
      item % 2 ? odds.push(item) : evens.push(item)
    }
    return [...evens.sort((a, b) => a - b), ...odds.sort((a, b) => b - a)]
}