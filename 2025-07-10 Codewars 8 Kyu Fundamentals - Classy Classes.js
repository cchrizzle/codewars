// 7/10/25 Thursday Codewars 8 Kyu Fundamentals - Classy Classes

// https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript

/*
Classy Classes

Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
Task

Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

// 2nd attempt - working!
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

   get info() {
        return `${this.name}s age is ${this.age}`
    }
}




// not working in codewars
class Person {
  constructor(name, age) {
    this.name = name,
    this.age = age,
  }
  
  get info {
    return `${this.name}s age is ${this.age}`
  }
}


// 1st attempt - not working
function MakePerson(name, age) {
    this.name = name
    this.age = age
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get Info() {
        return `${this.name}s age is ${this.age}`
    }
}

/* =============
Other Solutions
============= */
