// 9/26/24 Thursday Codewars 8 Kyu Fundamentals - Hello, Name or World!

// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/

function hello(name) {
    if (name) {
        return 'Hello, ' + name[0].toUpperCase() + name.toLowerCase().slice(1) + '!'
    }
    else {
        return 'Hello, World!'
    }
}




/* =============
Other Solutions
============= */