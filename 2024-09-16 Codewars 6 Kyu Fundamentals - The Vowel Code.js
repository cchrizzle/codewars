// 9/16/24 Monday Codewars 6 Kyu Fundamentals - The Vowel Code

// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript

/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/




// 4th attempt - working! Had to parseInt char when comparing to number "parseInt(char) === number"
let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
};

function encode(string) {
    let encodedArray = [];

    for (let char of string) {
        if (char in code) {
            encodedArray.push(code[char]);
        }
        else {
            encodedArray.push(char)
        }
    }

    let encodedString = encodedArray.join('');
    return encodedString;
  }




function decode(string) {
    let decodedArray = [];

    for (let char of string) {
        let decodedChar = char;

        for (let [vowel, number] of Object.entries(code)) {
            if (parseInt(char) === number) {
                decodedChar = vowel;
                break;
            }
        }

        decodedArray.push(decodedChar);
    }

    let decodedString = decodedArray.join('')
    return decodedString;
}





// 3rd attempt - not working
let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
};

function encode(string) {
    let encodedArray = [];

    for (let char of string) {
        if (char in code) {
            encodedArray.push(code[char]);
        }
        else {
            encodedArray.push(char)
        }
    }

    let encodedString = encodedArray.join('');
    return encodedString;
  }




function decode(string) {
    let decodedArray = [];

    for (let char of string) {
        let decodedChar = char;

        for (let [vowel, number] of Object.entries(code)) {
            if (char === number) {
                decodedChar = vowel;
                break;
            }
        }

        decodedArray.push(decodedChar);
    }

    let decodedString = decodedArray.join('')
    return decodedString;
}




// 2nd attempt - wrong (decoded section)
let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
};

function encode(string) {
    let encodedArray = [];

    for (let char of string) {
        if (char in code) {
            encodedArray.push(code[char]);
        }
        else {
            encodedArray.push(char)
        }
    }

    let encodedString = encodedArray.join('');
    return encodedString;
  }




function decode(string) {
    let decodedArray = [];

    for (let char of string) {
        let decodedChar = char;

        for (let [vowel, number] of Object.entries(code)) {
            if (char === number) {
                decodedArray.push(number)
            }
            else {
                decodedArray.push[char]
            }
        }
    }
}


// 1st attempt - not working
function encode(string) {
    let encode = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    }

    let splitString = string.split(' ');

    let encodedArray = [];

    for (let char of splitString) {
        if (char in encode) {
            encodedArray.push(encode[char]);
        }
        else {
            encodedArray.push(char)
        }
    }

    let encodedString = encodedArray.join(' ');
    return encodedString;
  }
  
  function decode(encodedString) {
    return
  }




/* =============
Other Solutions
============= */
// Other solution #1
const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')



// Other solution #2
function encode(string){
    var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
    return codeStringGivenMapping(string, vowelMapping);
  }
  
  function decode(string){
    var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
    return codeStringGivenMapping(string, vowelMapping); 
  }
  
  function codeStringGivenMapping(string, mapping){
    return string.split('').map(function(char){
      return mapping[char] || char;
    }).join(''); 
}