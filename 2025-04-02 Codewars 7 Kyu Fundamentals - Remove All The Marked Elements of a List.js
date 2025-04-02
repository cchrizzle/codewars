// 4/2/25 Wednesday Codewars 7 Kyu Fundamentals - Remove All The Marked Elements of a List

// https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

/*
Define a method/function that removes from a given array of integers all the values contained in a second array.
Examples (input -> output):

* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

Enjoy it!!
*/

// Code
Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(num => !values_list.includes(num));
}

/* =============
Other Solutions
============= */
// Other solution using indexOf === -1;
Array.prototype.remove_ = function(integer_list, values_list){
	return integer_list.filter(function (element) {
  	return values_list.indexOf(element) === -1;
  });
}