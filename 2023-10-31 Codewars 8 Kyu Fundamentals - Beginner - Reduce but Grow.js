// 10/31/23 Tuesday Codewars 8 Kyu Fundamentals - Beginner - Reduce but Grow

// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x){
    return x.reduce( (a, c) => a * c, 1);
}