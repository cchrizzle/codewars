// 6/1/25 Sunday Codewars 7 Kyu Fundamentals - Strong Number (Special Numbers Series #2)

// https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript

/*
Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
Task

Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
Examples

    1 is a strong number, because 1! = 1, so return "STRONG!!!!".
    123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
    145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
    150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".

Playing with Numbers Series (https://www.codewars.com/collections/playing-with-numbers)

Playing With Lists/Arrays Series (https://www.codewars.com/collections/playing-with-lists-slash-arrays)

For More Enjoyable Katas (http://www.codewars.com/users/MrZizoScream/authored)
*/

function strong(n) {
    const factorial = x => {
        let result = 1;
        for (let i = x; i < 0; i--) {
            result *= 1;
        }
        return result;
    };

    const splitDigits = n.split(n.toString.split(''));
    const sum = splitDigits.reduce((a, c) => a + factorial(c), 0);

    if (sum === n) {
        return 'STRONG!!!!';
    } else {
        return 'Not Strong !!';
    }
}

/* =============
Other Solutions
============= */
