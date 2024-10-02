// 10/1/24 Tuesday Codewars 6 Kyu Fundamentals - Are They the "Same"?

// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
Examples
Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays

If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 36100 is not the square of any number of a.
Remarks

    a or b might be [] or {} (all languages except R, Shell).
    a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
*/


// 3rd attempt - working!
function comp(array1, array2){
    // Null or undefined
    if (!array1 || !array2) {
        return false;
    };

    // Both empty arrays
    if (array1.length === 0 && array2.length === 0) {
        return true;
    }
    if (array1.length > 0 && array1.length === array2.length ) {
        let arr1Squared = array1.map(ele => ele ** 2);  // Changed to map to make code more concise
    

        let arr1SqSorted = arr1Squared.sort((a, b) => a - b);
        let array2Sorted = array2.sort((a, b) => a - b);

        for (let i = 0; i < arr1SqSorted.length; i++) {
            if (arr1SqSorted[i] !== array2Sorted[i]) {
                return false;
            }
        }
        return true;    // Moved outside for loop
    } else {
        return false;
    }
}



// 2nd attempt - not working
function comp(array1, array2){
    if (array1.length > 0 && array1.length === array2.length ) {
        let arr1Squared = array1.map(ele => ele ** 2);  // Changed to map to make code more concise
    

        let arr1SqSorted = arr1Squared.sort((a, b) => a - b);
        let array2Sorted = array2.sort((a, b) => a - b);

        for (let i = 0; i < arr1SqSorted.length; i++) {
            if (arr1SqSorted[i] !== array2Sorted[i]) {
                return false;
            }
        }
        return true;    // Moved outside for loop
    } else {
        return false;
    }
}


// 1st attempt - not working, had "return true" inside of for loop
function comp(array1, array2){
    if (array1.length > 0 && array1.length === array2.length ) {
        let arr1Squared = [];
    
        array1.forEach(ele => arr1Squared.push(ele ** 2));

        let arr1SqSorted = arr1Squared.sort((a, b) => a - b);
        let array2Sorted = array2.sort((a, b) => a - b);

        for (let i = 0; i < arr1SqSorted.length; i++) {
            if (arr1SqSorted[i] !== array2Sorted[i]) {
                return false;
            }
            return true;
        }
    } else {
        return false;
    }
}

console.log(comp([2,2,3], [4,9,9]))
console.log()


/* =============
Other Solutions
============= */
function comp(array1, array2){
    if (!array1 || !array2 || array2.length !== array1.length) return false;
    
    let power = array1.map( el => el*el);
    const order = array2.sort();
    power = power.sort();
    
    for (let i = 0; i < power.length; ++i) {
      if (power[i] !== order[i]) return false;
    }
    
    return true;
}