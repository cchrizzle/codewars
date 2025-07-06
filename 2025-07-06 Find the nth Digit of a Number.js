// 7/6/25 Sunday Codewars 7 Kyu Fundamentals - Find the nth Digit of a Number

// https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript

/*
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
Note

    If num is negative, ignore its sign and treat it as a positive value
    If nth is not positive, return -1
    Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

Examples(num, nth --> output)

5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1
*/

// 3rd attempt - working!
function findDigit(num, nth) {
    if (nth <= 0) {
        return -1;
    }

    const numAbsVal = Math.abs(num);
    const splitNum = numAbsVal.toString().split('');
    const reverseNumArr = splitNum.reverse();

    if (nth > reverseNumArr.length) {
        return 0;
    }

    return Number(reverseNumArr[nth - 1]);
}

// 2nd attempt - not working: reverseNumArr is reversing num and not splitNum
function findDigit(num, nth) {
    if (nth <= 0) {
        return -1;
    }

    const numAbsVal = Math.abs(num);
    const splitNum = num.toString().split('');
    const reverseNumArr = num.reverse();

    if (nth > numAbsVal.length) {
        return 0;
    }

    return reverseNumArr[nth - 1];
}

// 1st attempt - not working: split is string array and won't work on numbers
function findDigit(num, nth) {
    if (nth <= 0) {
        return -1;
    }

    const numAbsVal = Math.abs(num);
    const splitNum = num.split('');
    const reverseNumArr = num.reverse();

    if (nth > numAbsVal.length) {
        return 0;
    }

    return reverseNumArr[nth];
}

/* =============
Other Solutions
============= */
