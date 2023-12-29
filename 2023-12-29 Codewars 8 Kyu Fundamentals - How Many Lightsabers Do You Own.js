// 12/29/23 Friday Codewars 8 Kyu Fundamentals - How Many Lightsabers Do You Own?

// https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/javascript

/*
Description:

Inspired by the development team at Vooza, write the function that

    accepts the name of a programmer, and
    returns the number of lightsabers owned by that person.

The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18
*/




// 2nd attempt - working
function howManyLightsabersDoYouOwn(name) {
    if(name && name.toLowerCase() === 'zach') {     // Added name to make sure there is valid entry
        return 18;
    } else {
        return 0;
    }
}

// as arrow function
const howManyLightsabersDoYouOwn = name => name === 'Zach' ? 18 : 0;




// 1st attempt - not working because didn't account for if "name" is blank
function howManyLightsabersDoYouOwn(name) {
    if(name.toLowerCase() === 'zach') {
        return 18;
    } else {
        return 0;
    }
}




/* =============
Other Solutions
============= */