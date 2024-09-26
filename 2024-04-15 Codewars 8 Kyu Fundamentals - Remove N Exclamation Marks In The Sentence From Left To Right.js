// 4/15/24 Monday Codewars 8 Kyu Fundamentals - Exclamation Marks Series #6: Remove N Exclamation Marks In The Sentence From Left To Right

// https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript

/*
 Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples

remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/


// 3rd attempt - working
function remove(s,n){
    let removeAmount = n;

    if (removeAmount > 0) {
        let splitS = s.split('');
        for (let i = 0; i < splitS.length; i++) {
            if (splitS[i] === '!') {
                splitS.splice(i, 1);
                removeAmount -= 1;
                i--; // Need to adjust the index after removing an element
            }
            if (removeAmount === 0) {
                break;
            }
        }
        return splitS.join('');
    }
    
    return s;
}




// 2nd attempt - not working
function remove(s,n){
    let removeAmount = n;

    if (removeAmount > 0) {
        let splitS = s.split('');
        for (let i = 0; i < splitS.length; i++) {
            if (splitS[i] === '!') {
                splitS.pop([i]);
                removeAmount -= 1;
            }
            if (removeAmount = 0) {
                break;
            }
        }
        return splitS.join('');
    }
    
    return s;
}





// 1st attempt - not working
function remove(s,n){
    let splitS = s.split('')

    let removeAmount = n;

    for (let i = 0; i <= splitS.length; i++) {
        if (splitS[i] === '!' && removeAmount > 0) {
            splitS.pop([i]);
            removeAmount -= 1;
        }
        if (removeAmount = 0) {
            break;
        }
    }

    return splitS.join('');
}



/* =============
Other Solutions
============= */
// Other solutions #1
function remove(s,n){
    for (var i=0;i<n;i++) s=s.replace("!","");
    return s;
}


// Other solution #2
function remove(s,n){
    while(n) {
      s = s.replace("!", "");
      n--;
    }
    return s;
}