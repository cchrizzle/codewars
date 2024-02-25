// 2/24/24 Saturday Codewars 7 Kyu Fundamentals - Did We Win the Super Bowl?

// https://www.codewars.com/kata/59f69fefa0143109e5000019/train/javascript

/*
It's the fourth quater of the Super Bowl and your team is down by 4 points. You're 10 yards away from the endzone, if your team doesn't score a touchdown in the next four plays you lose. On a previous play, you were injured and rushed to the hospital. Your hospital room has no internet, tv, or radio and you don't know the results of the game. You look at your phone and see that on your way to the hospital a text message came in from one of your teamates. It contains an array of the last 4 plays in chronological order. In each play element of the array you will receive the yardage of the play and the type of the play. Have your function let you know if you won or not.
What you know:

    Gaining greater than 10 yds from where you started is a touchdown and you win.
    Yardage of each play will always be a positive number greater than 0.
    There are only four types of plays: "run", "pass", "sack", "turnover".
    Type of plays that will gain yardage are: "run", "pass".
    Type of plays that will lose yardage are: "sack".
    Type of plays that will automatically lose the game are: "turnover".
    When a game ending play occurs the remaining (plays) arrays will be empty.
    If you win return true, if you lose return false.

Examples:

[[8, "pass"],[5, "sack"],[3, "sack"],[5, "run"]]
`false`
[[12, "pass"],[],[],[]])
`true`
[[2, "run"],[5, "pass"],[3, "sack"],[8, "pass"]]
`true`
[[5, "pass"],[6, "turnover"],[],[]]
`false`
Good Luck!
*/


// Code wasn't working and couldn't figure out, had to look at solutions



// 2nd try - not working
function didWeWin(plays) {
    let yardsGained = 0;
    for (let i = 0; i < plays.length; i++) {
        // Immediate lose/win conditions
        if (plays[i][1] === 'turnover') {
            return false;
        } else if ( (plays[i][0] >= 10 && plays[i][1] === 'run') || (plays[i][0] >= 10 && plays[i][1] === 'pass') ) {
            return true;
        // Calculating yards gained/lost
        } else if (plays[i][1] === 'run' || plays[i][1] === 'pass') {
            yardsGained += plays[i][0];
        } else if (plays[i][1] === 'sack') {
            yardsGained -= plays[i][0];
        }
    }
    return yardsGained >= 10 ? true : false;    // Need to explicitly return because "in JavaScript, the return statement exits the function immediately, so if the condition yardsGained >= 10 ? true : false evaluates to true, you're not actually returning anything from the function"
}


// 1st try - not working
function didWeWin(plays) {
    let yardsGained = 0;
    for (let i = 0; i < plays.length; i++) {
        // Immediate lose/win conditions
        if (plays[i][1] === 'turnover') {
            return false;
        } else if ( (plays[i][0] >= 10 && plays[i][1] === 'run') || (plays[i][0] >= 10 && plays[i][1] === 'pass') ) {
            return true;
        // Calculating yards gained/lost
        } else if (plays[i][1] === 'run' || plays[i][1] === 'pass') {
            yardsGained += plays[i][0];
        } else if (plays[i][1] === 'sack') {
            yardsGained -= plays[i][0];
        }
    }
    yardsGained >= 10 ? true : false;
}




/* =============
Other Solutions
============= */
function didWeWin(plays){
    var s=0
    for (var i=0; i<4; ++i)
    {
      if (plays[i].length>1){
      if (plays[i][1]=='turnover') return false;
      if (plays[i][1]=='sack')
        s-=plays[i][0];
      else
        s+=plays[i][0]
        }
    }
    return s>10;
}