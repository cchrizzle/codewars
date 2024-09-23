// 9/23/24 Codewars 8 Kyu Fundamentals - Basic subclasses - Adam and Eve
function capitalizeTitle(title) {
    return title.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

// https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript

/*
According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.
*/

class God{
  /**
   * @returns Human[]
   */
    static create(){
      return [new Man, new Woman];
    }
  }
  class Human{}
  class Man extends Human{}
  class Woman extends Human{}




/* =============
Other Solutions
============= */