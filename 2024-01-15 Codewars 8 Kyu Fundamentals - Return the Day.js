// 1/15/24 Monday Codewars 8 Kyu Fundamentals - Return the Day 

// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript

/*
Complete the function which returns the weekday according to the input number:

    1 returns "Sunday"
    2 returns "Monday"
    3 returns "Tuesday"
    4 returns "Wednesday"
    5 returns "Thursday"
    6 returns "Friday"
    7 returns "Saturday"
    Otherwise returns "Wrong, please enter a number between 1 and 7"

*/

function whatday(num) { 
    let days = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday'
    }

    if(num in days) {
        return days[num];
    } else {
        return 'Wrong, please enter a number between 1 and 7'
    }
}






/* =============
Other Solutions
============= */
function whatday(num) { 
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}