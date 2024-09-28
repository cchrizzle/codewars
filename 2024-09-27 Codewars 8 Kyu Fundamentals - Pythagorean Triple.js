// 9/27/24 Friday Codewars 8 Kyu Fundamentals - Pythagorean Triple

// https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/javascript

/*
Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

A Pythagorean Triple consists of arranging 3 integers, such that:

a2 + b2 = c2
Examples

[5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

[3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52

[13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132

[100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2
Return Values

    For Python: return True or False
    For JavaScript: return true or false
    Other languages: return 1 or 0 or refer to Sample Tests.
*/

function isPythagoreanTriple(integers) {
    let sortedInt = integers.sort( (a, b) => a - b);

    return sortedInt[0] ** 2 + sortedInt[1] ** 2 === sortedInt[2] ** 2;
}

/* Note from comments: Caution: when you use the sort function, you end up changing the original array too. Best practice is to first copy it to another array. e.g:

let massiv = [...integers];

massiv.sort((a, b) => a - b);
*/

// Practicing note

function isPythagoreanTriple(integers) {
    let integersCopy = [...integers];
    let sortedInt = integersCopy.sort((a, b) => a - b);

    return sortedInt[0] ** 2 + sortedInt[1] ** 2 === sortedInt[2] ** 2;

}



/* =============
Other Solutions
============= */