// 8/14/24 Wednesday Codewars 7 Kyu Fundamentals - Regex validate PIN code

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

// 3rd attempt - working
function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }

    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < '0' || pin[i] > '9') {
            return false;
        }
    }

    return true;
}




// 2nd attempt
function validatePIN(pin) {
    if(pin.length !== 4 || pin.length !== 6) {
        return false;
    }

    for(let i = 0; i < pin.length; i++) {
        if(isNan(parseInt(pin[i], 10))) {                   // 10 is used to specify base 10
            return false
        }
    }

    return true;
}





// 1st attempt - not working, spliting the pin turns each number to a string
function validatePIN (pin) {
    if(pin.length != 4 || pin.length != 6) {
        return false;
    }

    let splitPin = pin.split('');
    splitPin.forEach(a => {
        if(typeof(a) != 'number') {
            return false;
        } else {
            return true;
        }
    })
}




/* =============
Other Solutions
============= */