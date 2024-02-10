// 10/2/23 Monday Codewars 8 Kyu Fundamentals - CSV representation of array

// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript

/*
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values

Note: you shouldn't escape the \n, it should work as a new line.

*/

// Chris' attempt - working
function toCsvText(array) {
    let output = '';
    for (let i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            output += array[i] + '\n'
        } else {
            output += array[i]
        }
    }
    
    return output;
}



// 2nd attempt - Chris' contribution
function toCsvText(array) {
    let output;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array.length - 1) {
            `${[...array[i]]}\n+`
        } else {
            output += [...array[i]]
        }
    }
}


// 1st attempt
function toCsvText(array) {
    let output;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array.length - 1) {
            output += '[...array[i]]\n+'; `${[...array[i]]}\n+`
        } else {
            output += array[i]
        }
    }
}




/* =============
Other Solutions
============= */
function toCsvText(array) {
    return array.join('\n');
}

// As arrow function
const toCsvText = array => array.join('\n');






// Chris' working notes
function toCsvText2(array) {
    let output = '';
    for (let i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            output += `${array[i]}` + '\\n'
        } else {
            output += array[i]
        }
    }
    
    return output;
}

let arr = [
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ]
console.log(toCsvText2(arr))