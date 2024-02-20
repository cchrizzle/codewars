// 2/19/24 Monday Codewars 6 Kyu Fundamentals - Give me a Diamond

// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
Task

You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
Examples

A size 3 diamond:

 *
***
 *

...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *

...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

// 4th attempt - working
function diamond(n){
    if (n < 0 || n % 2 === 0) {
        return null;
    }

    let diamond = '';
    for (let i = 1; i <= n; i += 2) {
        diamond += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
    }

    for (let i = n - 2; i >= 1; i -= 2) {
        diamond += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
    }

    return diamond;
}




// 3rd attempt - not working
function diamond(n){
    if (n < 0 || n % 2 === 0) {
        return null;
    }

    let diamond = '';
    for (let i = 1; i <= n; i += 2) {
        diamond += '*'.repeat(i) + '\n';
    }

    for (let i = n - 2; i >= 1; i -= 2) {
        diamond += ' '.repeat((n - i) / 2) + '*'.repeat(i) + '\n';
    }

    return diamond;
}


// 2nd attempt - not working
function diamond(n){
    if (n < 0 || n % 2 === 0) {
        return null;
    }

    let diamond = '';
    for (let i = 1; i <= n; i += 2) {
        diamond += '*'.repeat(i) + "'\n";
    }

    for (let i = n; i >= 1; i -= 2) {
        diamond += '*'.repeat(i) + "'\n";
    }

    return diamond;
}

// 1st attempt - not working
function diamond(n){
    if (n < 0 || n % 2 === 0) {
        return null;
    }

    let diamond = '';
    for (let i = 0; i <= n - 2; i++) {
        for (let j = 1; j <= n; j += 2) {
            diamond += '*'.repeat(j) + "'\n"
        }
    }
}




/* =============
Other Solutions
============= */
function diamond (n) {
    if (n <= 0 || n % 2 === 0) return null
    str = ''
    for (let i = 0; i < n; i++) { 
      let len = Math.abs((n-2*i-1)/2)
      str += ' '.repeat(len)
      str += '*'.repeat(n-2*len)
      str += '\n'
    }
    return str
}