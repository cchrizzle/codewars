// 12/16/24 Monday Codewars 7 Kyu Fundamentals - Switcheroo

// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x) {
    return x
        .split('')
        .map(letter => {
            if (letter === 'a') return 'b';
            if (letter === 'b') return 'a';
            return letter;
        })
        .join('');
}

/* =============
Other Solutions
============= */
