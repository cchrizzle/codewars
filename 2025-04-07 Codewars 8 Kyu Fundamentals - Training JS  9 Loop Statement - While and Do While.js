// 4/7/25 Monday Codewars 8 Kyu Fundamentals - Training JS #9: Loop Statement --While and Do..While

// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

/*
Complete function padIt, which accepts 2 parameters:

    str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
    n: a number indicating how many times to pad the string.

Behaviour

You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/

// Code
function padIt(str,n){
    let val = str, num = 1;
    let valArray = val.split('')
    do {
        if (num % 2 != 0) {
            valArray.unshift('*');
            num++;
        } else {
            valArray.push('*');
            num++;
        }
    } while (num <= n);
    return valArray.join('');
};

/* =============
Other Solutions
============= */
function padIt(str,n){
    while(n>0){
      if(n%2 === 0) {
        str = str + "*";
      }else{
        str = "*" + str;
      }
      n --;
    }
    return str;
  }