// 1/28/24 Sunday Codewars 7 Kyu Fundamentals - Sorted? Yes? No? How?

// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

/*
Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.
*/

// 3rd attempt - working
function isSortedAndHow(array) {
    let sortedArrayAscending = array.slice().sort( (a, b) => a - b);        // Added slice here and next line
    let sortedArrayDescending = array.slice().sort( (a, b) => b - a);

    if(array.join() === sortedArrayAscending.join()) {      // Added join here and in next if
        return 'yes, ascending';
    } else if(array.join() === sortedArrayDescending.join()) {
        return 'yes, descending';
    } else {
        return 'no';
    }
}





// 2nd attempt - not working
// array.sort() in previous attempt modifies original array in place, so comparison will always be true
function isSortedAndHow(array) {
    let sortedArrayAscending = array.sort( (a, b) => a - b);
    let sortedArrayDescending = array.sort( (a, b) => b - a);

    if(array === sortedArrayAscending) {
        return 'yes, ascending';
    } else if(array === sortedArrayDescending) {
        return 'yes, descending';
    } else {
        return 'no';
    }
}


// 1st attempt - not working
function isSortedAndHow(array) {
    if(array === array.sort( (a, b) => a - b) ) {
        return 'yes, ascending';
    } else if(array === array.sort( (a, b) => b - a)) {
        return 'yes, descending';
    } else {
        return 'no';
    }
}
/* not working for all test cases
[15, 7, 3, -8]
expected 'yes, ascending' to equal 'yes, descending'

[4, 2, 30]
expected 'yes, ascending' to equal 'no'

random array 1
expected 'yes, ascending' to equal 'yes, descending'
*/




/* =============
Other Solutions
============= */
function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':       // Look up every function
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}

// Other solution 2
const isSortedAndHow = a => {
    const s = a.join``;
    return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
           s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
}

// Other solution 3
/* ==================================
Good structure, review this!
================================== */
function isSortedAndHow(array){
	var ans;
	if (array[1] > array[0]){
		ans = "yes, ascending";
	}

	if (ans==="yes, ascending"){
			for (var i = 1; i<array.length; i++){
			if(array[i]>= array[i-1]){
				ans = "yes, ascending";
			} else return ans = "no";
		}
	}
	if (ans!=="yes, ascending"){
			for (var i = 1; i<array.length; i++){
			if(array[i]<= array[i-1]){
				ans = "yes, descending";
			} else return ans = "no";
		}		
	}
	return ans;
}