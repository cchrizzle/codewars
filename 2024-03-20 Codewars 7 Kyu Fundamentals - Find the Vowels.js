// 3/20/24 Wednesday Codewars 7 Kyu Fundamentals - Find the Vowels

// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES

    Vowels in this context refers to: a e i o u y (including upper case)
    This is indexed from [1..n] (not zero indexed!)
*/




// 2nd attempt - working
function vowelIndices(word){
    let vowelsIndex = [];
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            vowelsIndex.push(i + 1);
        }
    }

    return vowelsIndex;
}





// 1st attempt - not working
function vowelIndices(word){
    let vowelsIndex = [];
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            vowelsIndex.push(word.indexOf(word[i]) + 1);
        }
    }

    return vowelsIndex;
}




/* =============
Other Solutions
============= */
// Other solution 1 - using index in forEach()
function vowelIndices(word){
    const str = 'aeiouy';
    const arr = word.toLowerCase().split('');
    let answer = [];
    arr.forEach((name, i) => {
      if (str.indexOf(name) !== -1) {
        answer.push(i + 1);
      }
    });
    return answer;
}