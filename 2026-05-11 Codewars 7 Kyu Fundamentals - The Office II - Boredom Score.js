// 5/11/26 Monday Codewars 7 Kyu Fundamentals - The Office II - Boredom Score

// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

/*
Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

function boredom(staff) {
    let boredomScore = 0;

    const departments = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        'pissing about': 25,
    };

    for (const worker in staff) {
        let workerDepartment = staff[worker];

        boredomScore += departments[workerDepartment];
    }

    if (boredomScore <= 80) return 'kill me now';
    if (boredomScore >= 100) return 'party time!!';
    return 'i can handle this';
}

/* =============
Other Solutions
============= */
// Other solution #2 - I like how they have default value for scores between 80 and 100
const SCORES = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
};

function boredom(staff) {
    let val = Object.keys(staff).reduce((acc, cur) => acc + SCORES[staff[cur]], 0);

    if (val <= 80) return 'kill me now';
    if (val > 100) return 'party time!!';
    return 'i can handle this';
}

// Other solution #1 - look up Object methods
function boredom(staff) {
    var map = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        'pissing about': 25,
    };

    var score = Object.keys(staff).reduce(function (a, b) {
        return a + map[staff[b]];
    }, 0);

    if (score <= 80) {
        return 'kill me now';
    } else if (score > 80 && score < 100) {
        return 'i can handle this';
    } else if (score >= 100) {
        return 'party time!!';
    }
}

/* =============
Practicing Other Solutions
============= */
function boredom(staff) {
    const departments = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        'pissing about': 25,
    };

    const boredomScore = Object.values(staff).reduce((total, department) => {
        return total + departments[department];
    }, 0);

    if (boredomScore <= 80) return 'kill me now';
    if (boredomScore >= 100) return 'party time!!';
    return 'i can handle this';
}
