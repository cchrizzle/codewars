// 12/1/23 Friday Codewars 8 Kyu Fundamentals - Calculate BMI

// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

/*
Write function bmi that calculates body mass index (bmi = weight / height^2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

function bmi(weight, height) {
    const bmi = weight / height**2;
    if(bmi <= 18.5) return 'Underweight';
    else if(bmi <= 25) return 'Normal';
    else if(bmi <= 30) return 'Overweight';
    else if(bmi > 30) return 'Obese';
}




/* =============
Other Solutions
============= */
// Same as mine except doesn't use else - since I'm returning in every condition, the following conditions don't need the "else"
function bmi(weight, height) {
    let bmi = weight/height**2;
    if(bmi <=18.5) return "Underweight";
    if(bmi<=25.0 && bmi>18.5) return "Normal";
    if(bmi>25 && bmi<=30.0) return "Overweight";
    if(bmi>30) return "Obese";
}