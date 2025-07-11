// 7/4/25 Codewars 7 Kyu Fundamentals - Folding your way to the moon

// https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript

/*
Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it (http://scienceblogs.com/startswithabang/2009/08/31/paper-folding-to-the-moon/)? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

Note: Of course you can't do half a fold. You should know what this means ;P

Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.

*/

function foldTo(distance) {
    if (distance < 0) {
        return null;
    }

    let paperThickness = 0.0001;
    let foldCount = 0;

    while (paperThickness < distance) {
        paperThickness *= 2;
        foldCount += 1;
    }

    return foldCount;
}

/* =============
Other Solutions
============= */
