// 12/21/23 Thursday Codewars 8 Kyu Fundamentals - How Many Stairs Will Suzuki Climb In 20 Years?

// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/train/javascript

/*
Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]

Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]

Your function should return the 20 year estimate of the stairs climbed using the formula above.

Please also try the other Kata in this series..

    Help Suzuki count his vegetables... (https://www.codewars.com/kata/56ff1667cc08cacf4b00171b)
    Help Suzuki purchase his Tofu! (https://www.codewars.com/kata/57d4ecb8164a67b97c00003c)
    Help Suzuki pack his coal basket! (https://www.codewars.com/kata/57f09d0bcedb892791000255)
    Help Suzuki rake his garden! (https://www.codewars.com/kata/571c1e847beb0a8f8900153d)
    Suzuki needs help lining up his students! (https://www.codewars.com/kata/5701800886306a876a001031)


*/
// 2nd attempt - working
// Misread s as the number each day. Need to calculat each array in s
function stairsIn20(s) {
    let totalStairsYear = 0;
    for (let i = 0; i < s.length; i++) {
        totalStairsYear += s[i].reduce( (a, c) => a + c, 0)
    }

    return totalStairsYear * 20;
}


// 1st attempt - not working
function stairsIn20(s){
    let yearTotal = s.reduce( (a, c) => a + c, 0);
    return yearTotal * 20;
}




/* =============
Other Solutions
============= */
const stairsIn20 = (s) => s.flat(2).reduce((a, b) => a + b) * 20;       // *********** new method: flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

// Other solution #2 - chain reducing
function stairsIn20(a) {
    return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}