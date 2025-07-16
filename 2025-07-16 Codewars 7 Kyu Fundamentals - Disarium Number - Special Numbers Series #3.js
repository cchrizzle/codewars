// 7/16/25 Codewars 7 Kyu Fundamentals - Disarium Number (Special Numbers Series #3)

// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript

/*
Definition

Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Task

Given a number, Find if it is Disarium or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes

    Number passed is always Positive .
    Return the result as String

Input >> Output Examples

disariumNumber(89) ==> return "Disarium !!"

Explanation:

    Since , 81 + 92 = 89 , thus output is "Disarium !!"

disariumNumber(564) ==> return "Not !!"

Explanation:

Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/

function disariumNumber(n) {
    const splitN = String(n).split('');
    const nArray = splitN.map(e => Number(e));
    const sumOfPowers = nArray.reduce((a, c, i) => a + Math.pow(c, i + 1), 0);

    if (n === sumOfPowers) return 'Disarium !!';
    else return 'Not !!';
}

/* =============
Other Solutions
============= */
