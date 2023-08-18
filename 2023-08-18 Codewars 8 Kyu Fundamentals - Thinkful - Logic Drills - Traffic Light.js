// 2023-08-18 Friday Codewars 8 Kyu Fundamentals - Thinkful - Logic Drills: Traffic Light

// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

function updateLight(current) {
    if(current === 'green') {
      return 'yellow';
    } else if(current === 'yellow') {
      return 'red';
    } else if(current === 'red') {
      return 'green';
    }
  }
  
    // More efficient from solutions
    function updateLight(current) {
      return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
    }
  
      // Own try to make arrow functoin
      const updateLight = current => current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';         // Using ternary operators: checks if current is green: if so - returns 'yellow'; if not - checks if it's yellow: if so returns red, if not it can only be red left so returns green as a result