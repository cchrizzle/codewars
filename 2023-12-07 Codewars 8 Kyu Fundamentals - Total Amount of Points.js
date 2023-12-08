// 12/7/23 Thursday Codewars 8 Kyu Fundamentals - Total Amount of Points

// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

    if x > y: 3 points (win)
    if x < y: 0 points (loss)
    if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

    our team always plays 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4

*/

function points(games) {
    let teamPoints = 0;

    for(let i = 0; i < games.length; i++) {
        // Split match into array of scores
        const [team1Score, team2Score] = games[i].split(':')

        if(team1Score > team2Score) {
            teamPoints += 3;
        } else if(team1Score === team2Score) {
            teamPoints += 1;
        }
    }

    return teamPoints;
}




/* =============
Other Solutions
============= */
function points(games) {
    var sum=0;
    for (var i=0; i<games.length; ++i)
    {
      if (games[i][0]>games[i][2])
        sum+=3;
      if (games[i][0]==games[i][2])
        sum+=1;
    }
    return sum;
}