// 7/31/24 Wednesday Codewars 7 Kyu Fundamentals - Divide and Conquer

// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

function divCon(x){
    let numbers = 0;
    let strings = 0;

    x.forEach(e => {
        if (typeof(e) === 'string') {
            strings += parseInt(e)
        } else {
            numbers += e;
        }
    })

    return numbers - strings;
}




/* =============
Other Solutions
============= */
// Other solutions 1: reduce - REALLY NICE!!
function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}