// 8/2/24 Friday Codewars 8 Kyu Fundamentals - Find Out Whether The Shape Is A Cube

// https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript

/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
*/

function cubeChecker(volume, side) {
  if (volume > 0 && side > 0) {
    return volume === side ** 3;
  }
  return false;
}

const cubeChecker = (volume, side) => {
  return volume === side ** 3;
};

/* =============
Other Solutions
============= */
var cubeChecker = function (volume, side) {
  return side > 0 && side ** 3 === volume;
};
