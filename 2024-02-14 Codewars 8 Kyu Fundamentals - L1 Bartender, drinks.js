// 2/14/24 Wednesday Codewars 8 Kyu Fundamentals - L1: Bartender, drinks!

// https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/

function getDrinkByProfession(param){
    const drinks = {
        'jabroni': 'Patron Tequila',
        'school counselor': 'Anything with Alcohol',
        'programmer': 'Hipster Craft Beer',
        'bike gang member': 'Moonshine',
        'politician': 'Your tax dollars',
        'rapper': 'Cristal',
    }

    let paramLowerCase = param.toLowerCase();
    if (paramLowerCase in drinks) {
        return drinks[paramLowerCase];
    } else {
        return 'Beer';
    }
}

// Practicing streamlined code
function getDrinkByProfession(param){
    const drinks = {
        'jabroni': 'Patron Tequila',
        'school counselor': 'Anything with Alcohol',
        'programmer': 'Hipster Craft Beer',
        'bike gang member': 'Moonshine',
        'politician': 'Your tax dollars',
        'rapper': 'Cristal',
    }

    let paramLowerCase = param.toLowerCase();
    if (paramLowerCase in drinks) return drinks[paramLowerCase];

    return 'Beer';
}




/* =============
Other Solutions
============= */