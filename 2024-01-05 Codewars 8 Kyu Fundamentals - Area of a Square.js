// 1/5/24 Friday Codewars 8 Kyu Fundamentals - Area of a Square

// https://www.codewars.com/kata/5748838ce2fab90b86001b1a/train/javascript

/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph **go to site for picture**

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

function squareArea(A){
    // Circumference of a circle = 2 * pi * r. Length of given part of circle is 1/4 full circle, so A = 1/4(2 * pi * r) => r = 2A/pi
    let radius = (2 * A) / Math.PI;
    return radius ** 2;
}



/* =============
Other Solutions
============= */
function squareArea(A){
    var circum = 4 * A;
    var radius = circum / (2 * Math.PI);
    var area = Math.pow(radius, 2);
    return Math.round(area*100)/100
}

// Other solution #2
squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);