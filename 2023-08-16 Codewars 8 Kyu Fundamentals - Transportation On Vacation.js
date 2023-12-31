// 08-16-23 Wednesday Codewars 8 Kyu Fundamentals - Transportation On Vacation

// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

const rentalCarCost = d => d >= 7 ? (40 * d - 50) : d >= 2 && d <= 6 ? (40 * d - 20) : 40 * d;

  // Best practice solution: great for reusability for daily rate changes that can be updated on the fly
  function baseCost(days, rate) {
    return days * rate;
  }
  
  function discountRate(days) {
    if ( days >= 7 ) {
      return 50;
    }
    else if ( days >= 3 ) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
  }


// Clever solution
const rentalCarCost = d => 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0)