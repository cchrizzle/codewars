// 2/29/24 Thursday Codewars 7 Kyu Fundamentals - No Zeros for Heros

// https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway
*/


// 2nd attempt
function noBoringZeros(n) {

    if (n.toString().length === 1) {
        return n;
    }

    let splitN = n.toString().split('');
    while (splitN[splitN.length - 1] === '0') {
        splitN = splitN.slice(0, splitN.length - 1)
    }
    return parseInt(splitN.join(''))
}




// 1st attempt - not working
function noBoringZeros(n) {
    if (n.length > 1) {
        let splitN = n.split('');

        if (splitN[splitN.length - 1] === 0) {
            return splitN.slice(0, splitN.length - 1).join('');
        } else {
            return splitN.join('')
        }
    } else {
        return n;
    }
}




/* =============
Other Solutions
============= */
// Other solutions
function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
}