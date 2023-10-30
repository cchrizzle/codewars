// 10/29/23 Sunday Codewars 8 Kyu Fundamentals - Opposites Attract

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/




// 2nd attempt - working
function lovefunc(flower1, flower2) {
    if( ((flower1 % 2 === 0) && (flower2 % 2 !== 0)) || ((flower2 % 2 === 0) && (flower1 % 2 !== 0))) {
        return true;
    } else {
        return false;
    }
}

// 2nd attempt trying to use original format of 1st attempt - not working
function lovefunc(flower1, flower2) {
    return (Number.isInteger(flower1 % 2) && !Number.isInteger(flower2 % 2)) || (Number.isInteger(flower2 % 2) && !Number.isInteger(flower1 % 2));
}

/* =============
Other Solutions
============= */
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}



// another solution
function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 === 1
}




// 1st attempt
function lovefunc(flower1, flower2){
    return Number.isInteger(flower1 % 2) && !Number.isInteger(flower2);
}

// As arrow function
const loveFunc = (flower1, flower2) => (flower1 % 2 === 0) && (flower2 % 2 !== 0);