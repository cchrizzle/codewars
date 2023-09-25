// 9/24/23 Sunday Codewars 8 Kyu Fundamentals - Well of Ideas - Easy Version

// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x){
    let goodIdeas = 0;

    for(let i = 0; i < x.length; i++) {
        if(x[i].toLowerCase() === 'good') goodIdeas += 1;
    }

    if (goodIdeas === 0) return 'Fail!';
    if (goodIdeas > 0 && goodIdeas < 3) return 'Publish!';
    if (goodIdeas > 2) return 'I smell a series!';

}




/* =============
Other Solutions
============= */