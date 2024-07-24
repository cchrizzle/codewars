// 7/24/24 Wednesday Codewars 6 Kyu Fundamentals - Delete Occurrences Of An Element If It Occurs More Than N Times

// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

/*
Enough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
Task

Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/


// 6th attempt - working!!
function deleteNth(arr, n) {
    let numbers = {};
    let newList = [];

    arr.forEach(e => {
        if (numbers[e]) {
            if (numbers[e] < n) {
                numbers[e]++;
                newList.push(e);
            }
        } else {
            numbers[e] = 1;
            newList.push(e);        // Used bracket instead of parenthesis
        }
    });

    return newList;
}




// 5th attempt - not working
function deleteNth(arr, n) {
    let numbers = {};
    let newList = [];

    arr.forEach(e => {
        if (e in numbers) {
            if (numbers[e] < n) {       // Split conditions so else condition doesn't keep pushing if !(numbers[e] < n)
                numbers[e]++;
                newList.push(e);
            }
        } else {
            numbers[e] = 1;
            newList.push[e];
        }
    })

    return newList;
}


// 4th attempt
function deleteNth(arr,n){
    let numbers = {};
    let newList = [];

    arr.forEach(e => {
        if (e in numbers && numbers[e] < n) {       // Added [e] to numbers
            numbers[e]++;
            newList.push(e)
        } else {
            numbers[e] = 1;
            newList.push(e)
        }
    })

    return newList;
}




// 3rd attempt - not working
function deleteNth(arr,n){
    let numbers = {};

    arr.forEach(e => {
        if (e in numbers && numbers < n) {
            numbers[e]++;
        } else {
            numbers[e] = 1;
        }
    })

    let newList = [];

    arr.forEach(ele => {
        if (numbers[ele] < n) {     // Changed to just <
            newList.push(ele);
        }
    })

    return newList;
}




// 2nd attempt - not working
function deleteNth(arr,n){
    let numbers = {};

    arr.forEach(e => {
        if (e in numbers && numbers < n) {
            numbers[e]++;
        } else {
            numbers[e] = 1;
        }
    })

    let newList = [];

    arr.forEach(ele => {        // Fixed "ForEach" typo and changed identifier to make it more distinguishable
        if (numbers[ele] <= n) {
            newList.push(ele);
        }
    })

    return newList;
}




// 1st attempt - not working
function deleteNth(arr,n){
    let numbers = {};

    arr.forEach(e => {
        if (e in numbers && numbers < n) {
            numbers[e]++;
        } else {
            numbers[e] = 1;
        }
    })

    let newList = [];

    arr.ForEach(e => {
        if (numbers[e] <= n) {
            newList.push(e);
        }
    })

    return newList;
}




/* =============
Other Solutions
============= */
// Other solution 1: filter
function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
}

