// 8/13/24 Tuesday Codewars 7 Kyu Fundamentals - Who Ate the Cookie?

// https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript

/*
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.

Please leave feedback for this kata. Cheers!
*/




// 2nd attempt - working
function cookie(x) {
    let name;

    if (typeof(x) === 'string') {
        name = 'Zach';
    } else if (typeof(x) === 'number') {
        name = 'Monica';
    } else {
        name = 'the dog';
    }

    return `Who ate the last cookie? It was ${name}!`;
}




// 1st attempt - not working: template literal is interpreted when it is called, so I need to put it at the end.
function cookie(x){
    let ateTheCookie = `Who ate the last cookie? It was ${name}!`;
    let name;

    if (typeof(x) === 'string') {
        name = 'Zach';
        return ateTheCookie;
    } else if (typeof(x) === 'number') {
        name = 'Monica';
        return ateTheCookie;
    } else {
        name = 'the dog';
        return ateTheCookie;
    }
}




/* =============
Other Solutions
============= */