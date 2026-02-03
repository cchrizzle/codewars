// 2/3/26 Tuesday Codewars 8 Kyu Fundamentals - Grader

// https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/train/javascript

/*
Create a function that takes a number as an argument and returns a grade based on that number.
Score 	Grade
Anything greater than 1 or less than 0.6 	"F"
0.9 or greater 	"A"
0.8 or greater 	"B"
0.7 or greater 	"C"
0.6 or greater 	"D"

Examples:

grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D"

*/

// 2nd attempt - working
function grader(score) {
    if (score > 1.0 || score < 0.6) return 'F';
    if (score >= 0.9) return 'A';
    if (score >= 0.8) return 'B';
    if (score >= 0.7) return 'C';
    if (score >= 0.6) return 'D';
}

// 1st attempt - not working, switch conditionals don't work the way I thought they do
function grader(score) {
    switch (score) {
        case score >= 0.9 && score <= 1.0:
            return 'A';
            break;
        case score >= 0.8 && score < 0.9:
            return 'B';
            break;
        case score >= 0.7 && score < 0.8:
            return 'C';
            break;
        case score >= 0.6 && score < 0.7:
            return 'D';
            break;
        default:
            return 'F';
    }
}

/* =============
Other Solutions
============= */
// Other solution #1: Proper way to do switch
const grader = s => {
    switch (true) {
        case s > 1:
            return 'F';
        case s >= 0.9:
            return 'A';
        case s >= 0.8:
            return 'B';
        case s >= 0.7:
            return 'C';
        case s >= 0.6:
            return 'D';
        default:
            return 'F';
    }
};

// Other solution #2: Default "A"
function grader(score) {
    if (score > 1 || score < 0.6) return 'F';
    if (score < 0.7) return 'D';
    if (score < 0.8) return 'C';
    if (score < 0.9) return 'B';
    return 'A';
}
