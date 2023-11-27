// 11/26/23 Sunday Codewars 8 Kyu Fundamentals - How Good Are You Really?

// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/




// 3rd try - working
function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    const classTotal = classPoints
        .reduce( (acc, c) => acc + c, 0);                   // From other solutions: can use yourPoints as beginning value instead of having to push in previous line
    const classAverage = classTotal / classPoints.length;

    return yourPoints > classAverage;
}




// 2nd try
function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);

    const classAverage = classPoints
        .reduce( (acc, c) => (acc + c) / classPoints.length, 0);

    return yourPoints > classAverage;
}
/* Not working: Passed 20 but failed 25:

Basic Tests Passed:
betterThanAverage([2, 3], 5) should return True
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69) should return True

Basic Tests Failed:
betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False
    expected true to equal false
    Completed in 1ms
betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False
    expected true to equal false
*/



// 1st try
function betterThanAverage(classPoints, yourPoints) {
    const totalPoints = classPoints.push(yourPoints);

    const classAverage = totalPoints
        .reduce( (acc, c) => (acc + c) / totalPoints.length, 0);

    return yourPoints > classAverage;
}
/* Not working:
betterThanAverage([2, 3], 5) should return True

TypeError: totalPoints.reduce is not a function
    at betterThanAverage (test.js:6:10)
    at Context.<anonymous> (test.js:17:24)
    at process.processImmediate (node:internal/timers:471:21)

betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True

TypeError: totalPoints.reduce is not a function
    at betterThanAverage (test.js:6:10)
    at Context.<anonymous> (test.js:21:24)
    at process.processImmediate (node:internal/timers:471:21)

betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69) should return True

TypeError: totalPoints.reduce is not a function
    at betterThanAverage (test.js:6:10)
    at Context.<anonymous> (test.js:25:24)
    at process.processImmediate (node:internal/timers:471:21)

betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False

TypeError: totalPoints.reduce is not a function
    at betterThanAverage (test.js:6:10)
    at Context.<anonymous> (test.js:29:24)
    at process.processImmediate (node:internal/timers:471:21)

betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False

TypeError: totalPoints.reduce is not a function
    at betterThanAverage (test.js:6:10)
    at Context.<anonymous> (test.js:33:24)
    at process.processImmediate (node:internal/timers:471:21)
*/




/* =============
Other Solutions
============= */