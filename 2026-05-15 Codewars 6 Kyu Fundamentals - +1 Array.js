// 5/15/26 Friday Codewars 6 Kyu Fundamentals - +1 Array

// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript

/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).
Examples

Valid arrays

    [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
    [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
    [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
    [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)

Invalid arrays

    [] is invalid because it is empty
    [1, -9] is invalid because -9 is not a non-negative integer
    [1, 2, 33] is invalid because 33 is not a single-digit integer
*/

// Trying to strengthen code
function upArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || arr[i] > 9 || arr[i] < 0) return null;
    }

    const arrCopy = [...arr];

    let index = arrCopy.length - 1;

    while (arrCopy[index] === 9) {
        arrCopy[index] = 0;
        index--;
    }

    if (index === -1) {
        arrCopy.unshift(1);
        return arrCopy;
    } else {
        arrCopy[index]++;
        return arrCopy;
    }
}

// 6th attempt - WORKING!!!
function upArray(arr) {
    if (arr.length === 0) return null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 9 || arr[i] < 0) return null;
    }

    const arrCopy = [...arr];

    let index = arrCopy.length - 1;

    while (arrCopy[index] === 9) {
        arrCopy[index] = 0;
        index--;
    }

    if (index === -1) {
        arrCopy.unshift(1);
        return arrCopy;
    } else {
        arrCopy[index]++;
        return arrCopy;
    }
}

// 5th attempt - not working
function upArray(arr) {
    if (arr.length === 0) return null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) return null;
    }

    const arrCopy = [...arr];

    let index = arrCopy.length - 1;

    if (arrCopy[index] < 9) {
        arrCopy[index]++;
        return arrCopy;
    }

    while (arrCopy[index] === 9) {
        arrCopy[index] = 0;
        index--;
    }

    if (arr[0] === 9) {
        arrCopy.unshift(1);
        return arrCopy;
    } else {
        arrCopy[index - 1]++;
        return arrCopy;
    }
}

// 4th attempt - not working
function upArray(arr) {
    if (arr.length === 0) return null;

    const arrCopy = [...arr];

    for (let i = arrCopy.length - 1; i >= 0; i--) {
        if (String(arrCopy[i]).length > 1) return null;

        if (arrCopy[i] < 9) {
            arrCopy[i] += 1;
            return arrCopy;
        } else {
            while (arrCopy[i] === 9) {
                arrCopy[i] = 0;
            }
            arrCopy[i - 1] += 1;

            return arrCopy;
        }
    }
}

// 3rd attempt - not working
function upArray(arr) {
    if (arr.length === 0) return null;
    arr.forEach(e => {
        if (e < 0) {
            return null;
        }
    });

    const arrNumber = Number(arr.join(''));

    const plus1 = arrNumber + 1;

    const stringArr = String(plus1).split('');

    const numArr = stringArr.map(e => Number(e));

    if (arr[0] === 0) {
        numArr.unshift(0);
        return numArr;
    } else {
        return numArr;
    }
}

// 2nd attempt - not working
function upArray(arr) {
    if (arr.length === 0) return null;

    const arrNumber = Number(arr.join(''));

    const plus1 = arrNumber + 1;

    const stringArr = String(plus1).split('');

    const numArr = stringArr.map(e => Number(e));

    if (arr[0] === 0) {
        numArr.unshift(0);
        return numArr;
    } else {
        return numArr;
    }
}

// 1st attempt - not working; forEach returns null, need map() to create new array.
function upArray(arr) {
    const arrNumber = Number(arr.join(''));

    const plus1 = arrNumber + 1;

    const stringArr = String(plus1).split('');

    const numArr = stringArr.forEach(e => Number(e));

    if (arr[0] === 0) {
        return numArr.unshift(0);
    } else {
        return numArr;
    }
}

/* =============
Other Solutions
============= */
function upArray(arr) {
    if (typeof arr === 'undefined' || arr === null || arr.length === 0) {
        return null;
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || typeof arr[i] !== 'number' || arr[i] > 9) {
            return null;
        }
    }
    // if its 9 and more than one digit we have to check all previous digits
    // whether they are also a 9
    for (var j = arr.length - 1; j > -1; j--) {
        if (arr[j] !== 9) {
            arr[j] = arr[j] + 1;
            break;
        } else {
            arr[j] = 0;
        }

        if (j === 0) {
            arr.unshift(1);
        }
    }

    return arr;
}
