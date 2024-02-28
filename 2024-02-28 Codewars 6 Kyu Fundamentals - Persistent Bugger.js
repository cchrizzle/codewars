// 2/28/24 Wednesday Codewars 6 Kyu Fundamentals - Persistent Bugger.

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

// 2nd attempt - working
// While loop timing out in 1st try, need to fix
function persistence(num) {
    let numString = num.toString();

    let multiplyAmount = 0;
    if (numString.length === 1) return 0;

    while (numString.length > 1) {
        let result = 1;
        for (let i = 0; i < numString.length; i++) {
            result *= parseInt(numString[i]);
        }
        numString = result.toString();
        multiplyAmount += 1;
    }

    return multiplyAmount;
}


// 1st attempt - not working, timed out
function persistence(num) {
    let numString = num.toString();

    let multiplyAmount = 0;
    if (numString.length === 1) {
        return 0;
    } else {
        while (numString.length > 1) {
            for (let i = 0; i < numString.length; i++) {
                numString[i] *= numString[i + 1];
                multiplyAmount += 1;
            }
        }
    }

    return multiplyAmount;
}




/* =============
Other Solutions
============= */
function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
}

// Other solution #2
function persistence(num) {
    let i,
      product,
      val = `${num}`;
    
    for (i = 0; val.length !== 1; i++) {
      product = 1;
  
      for (let digit of val)
        product *= digit;
  
      val = `${product}`;
    }
    return i;
  }