// 7/17/24 Wednesday Codewars 7 Kyu Fundamentals - Money, Money, Money

// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

/*
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30

Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
*/

// 2nd attempt
function calculateYears(principal, interest, tax, desired) {
    if (desired === principal) {
        return 0;
    }

    let years = 0;

    while (principal < desired) {
        let gross = principal * interest;
        let taxed = gross * tax;
        let net = gross - taxed;
        principal += net;
        years++
    }

    return years;
}





// 1st attempt - not working
function calculateYears(principal, interest, tax, desired) {
    if (desired === principal) {
        return 0;
    }

    let years = 0;
    let gross = principal * interest
    let taxedAmount = gross - (gross * tax)
    let net = gross - taxedAmount

    while (principal < desired) {
        principal += net
        years++;
    }

    return years;
}




/* =============
Other Solutions
============= */
// Other solution #1
function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}




// Other solution #2 - for loop
function calculateYears(principal, interest, tax, desired) {
    // Not needed, but break if not needed
    if (principal === desired) { return 0; }
    
    let balance = principal;
    
    for (var year = 0; balance < desired; year++) {
      balance += (balance * interest) * (1 - tax);
    }
    
    return year;
}