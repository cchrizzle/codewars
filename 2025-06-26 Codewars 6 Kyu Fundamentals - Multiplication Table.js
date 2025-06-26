// 6/26/25 Codewars 6 Kyu Fundamentals - Multiplication Table

// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/


// Refactoring
function multiplicationTable(size) {
    const mainArray = [];

    for (let i = 1; i <= size; i++) {
        mainArray.push([]);
        
        for (let j = 1; j <= size; j++) {
            mainArray[i - 1].push(j * i);
        }
    }

    return mainArray;
}


// 4th attempt - submitted and working
function multiplicationTable(size) {
    const mainArray = [];

    for(let i = 0; i < size; i++) {
        mainArray.push([]);
    };

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            mainArray[i].push((i + 1) * (j + 1));
        }
    }

    return mainArray;
}


// 3rd attempt
function multiplicationTable(size) {
    const mainArray = [];

    for (let i = 0; i < size; i++) {
        mainArray[i] = [];
    }

    mainArray.map(subArray => {
        subArray.push(mainArray.indexOf(subArray) + 1)
    })
}

    // Trying using for loop
    function multiplicationTable(size) {
        const mainArray = [];


        // Trying this out - working
        for (let i = 0; i < size; i++) {
            mainArray.push([])
        }

        // Invalid way of doing
        for(let i = 0; i < mainArray.length; i++) {
            mainArray[i].push({
                for (let j = i + 1; j < size; j++) {
                    (i + 1) * j;
                }}
            )
        }

        return mainArray;
    }



// 2nd attempt
function multiplicationTable(size) {
    let mainArray = [];

    for (let i = 0; i < size; i++) {
        let subArray[i] = [];
    }

    mainArray.map(subArray => {
        subArray.push
    })

}


// 1st attempt
function multiplicationTable(size) {

    // Setting up arrays
    for (let i = 0; i < size; i++) {
        let array[i] = [];
    }

    // Filling arrays
    for (let i = 1; i <= size; i++) {
        array[i].push(i)
    }
}

/* =============
Other Solutions
============= */
function multiplicationTable (size) {
  const res = [];
  for (let i = 1; i <= size; i++) {
    res.push([]);
    for (let j = 1; j <= size; j++) {
      res[i - 1].push(j * i);
    }
  }
  return res;
}