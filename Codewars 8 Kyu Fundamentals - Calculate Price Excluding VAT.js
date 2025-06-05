// 6/1/25 Sunday Codewars 8 Kyu Fundamentals - Calculate Price Excluding VAT

// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript

/*
Write a function that calculates the original product price, without VAT.
Example

If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

    VAT is always 15% for the purposes of this Kata.
    Round the result to 2 decimal places.
    If null value given then return -1
*/

// 2nd attempt - working
function excludingVatPrice(price) {
    if (price === null) {
        return -1;
    } else {
        return (price / 1.15).toFixed(2);
    }
}

// 1st attempt - not working, null example is excludingVatPrice(null) so just need to add conditional before calculating.
function excludingVatPrice(price) {
    const beforeVAT = price / 1.15;

    if (beforeVAT === null) {
        return -1;
    } else {
        return beforeVAT;
    }
}

/* =============
Other Solutions
============= */
