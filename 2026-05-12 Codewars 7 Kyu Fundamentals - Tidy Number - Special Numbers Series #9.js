// 5/12/26 Wednesday Codewars 7 Kyu Fundamentals - Tidy Number (Special Numbers Series #9)

// https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

/*
Definition

A Tidy Number is a number whose digits are in non-decreasing order.
Task

Given a number, determine if it is tidy or not.
Notes

    The number passed will always be positive.
    Return the result as a boolean.

Examples

12 ==> return true
Explanation: Digits {1, 2} are in non-decreasing order (1 <= 2).

32 ==> return false
Explanation: Digits {3, 2} are not in non-decreasing order (3 > 2).

1024 ==> return false
Explanation: Digits {1, 0, 2, 4} are not in non-decreasing order (1 > 0).

13579 ==> return true
Explanation: Digits {1, 3, 5, 7, 9} are in non-decreasing order.

2335 ==> return true
Explanation: Digits {2, 3, 3, 5} are in non-decreasing order (3 = 3).

Playing with Numbers Series (https://www.codewars.com/collections/playing-with-numbers)
Playing With Lists/Arrays Series (https://www.codewars.com/collections/playing-with-lists-slash-arrays)
For More Enjoyable Katas (http://www.codewars.com/users/MrZizoScream/authored)

ALL translations are welcomed

Enjoy Learning!!

Zizou
*/

// 2nd attempt - working!
function tidyNumber(n) {
    const nString = n.toString();

    if (nString.length === 1) return true;

    for (let i = 0; i < nString.length - 1; i++) {
        if (nString[i + 1] < nString[i]) return false;
    }

    return true;
}

// 1st attempt - not working
function tidyNumber(n) {
    if (n.length === 1) return true;

    const nString = n.toString();

    for (let i = 0; i < nString.length - 1; i++) {
        while (nString[i + 1] >= nString[i]) {
            return true;
        }

        return false;
    }
}

/* =============
Other Solutions
============= */
