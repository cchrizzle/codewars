// 11/28/23 Tuesday Codewars 8 Kyu Fundamentals - Grasshopper - Terminal game combat function

// https://www.codewars.com/kata/586c1cf4b98de0399300001d/train/javascript

/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
    const remainingHealth = health - damage;
    if(remainingHealth > 0) return remainingHealth;
    if(remainingHealth <= 0) return 0;
}



/* =============
Other Solutions
============= */