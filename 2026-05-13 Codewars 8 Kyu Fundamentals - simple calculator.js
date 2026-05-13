// 5/13/26 Wednesday Codewars 8 Kyu Fundamentals - simple calculator

// https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript

/*
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

You should return the result of applying the given operation to these numbers.

Note: In dynamically typed languages (JS, PHP, Python), the first and second arguments can be not numbers. In that case, return "unknown value".

If the given operation to perform on the two numbers is not one of the four mentioned above, you should:

    return a value:
        "unknown value" (JS, PHP, Python)
    throw an exception:
        std::invalid_argument (C++)
        ArgumentException (C#)
        IllegalArgumentException (Java)

Example:

arguments: 1, 2, "+"
should return 3

arguments: 1, 2, "&"
refer to the description for what you should return in this case

# Specifically for dynamically-typed languages:

arguments: 1, "k", "*"
should return "unknown value"

Good luck!
*/

// 2nd attempt - working
// Own notes: can use Number.isFinite() instead of typeof _ === 'number' since NaN would pass typeof test.
function calculator(a, b, sign) {
    if (typeof a !== 'number' || typeof b !== 'number') return 'unknown value';

    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'unknown value';
    }
}

// 1st attempt - not working
function calculator(a, b, sign) {
    if (typeof a !== 'number' || typeof b === 'number') return 'unknown value';

    switch (sign) {
        case sign === '+':
            return a + b;
        case sign === '-':
            return a - b;
        case sign === '*':
            return a * b;
        case sign === '/':
            return a / b;
    }
}

/* =============
Other Solutions
============= */
