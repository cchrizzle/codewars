// 12/26/23 Tuesday Codewars 6 Kyu Fundamentals - Who Likes It?

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

*/




// 5th attempt - working, cleaner solution in other solutions below
function likes(names) {
    // if no one likes
    if(names.length === 0) {
        return 'no one likes this';
    } else if(names.length === 1) {
        return `${names[0]} likes this`;        // Changed "names.join()" to "names[0]"
    } else if(names.length < 4) {
        return `${names.slice(0, -1).join(', ')} and ${names.slice(-1)} like this`;      // Changed "join(' and ')" to "join(', ')"; Added "and ${names.slice(-1)}"
    } else {
        const firstTwoNames = names.slice(0, 2).join(', ');
        const remainingCount = names.length - 2;
        return `${firstTwoNames} and ${remainingCount} others like this`;
    }
}




// 4th attempt
function likes(names) {
    // if no one likes
    if(names.length === 0) {
        return 'no one likes this';
    } else if(names.length === 1) {
        return `${names.join()} likes this`;
    } else if(names.length < 4) {                   // Removed names.length > 1
        return `${names.slice(0, -1).join(' and ')} like this`;      // Added .slice(0, -1) which takes first two; join() then removes from array but with original comma as well which automatically formats it
    } else {
        const firstTwoNames = names.slice(0, 2).join(', ');
        const remainingCount = names.length - 2;
        return `${firstTwoNames} and ${remainingCount} others like this`;
    }
}




// 3rd attempt - not working for more than 2 names where it needs to be separated by a comma instead of joined with an "and"
function likes(names) {
    // if no one likes
    if(names.length === 0) {
        return 'no one likes this';
    } else if(names.length === 1) {
        return `${names.join()} likes this`;
    } else if(names.length > 1 && names.length < 4) {
        return `${names.join(' and ')} like this`
    } else {
        const firstTwoNames = names.slice(0, 2).join(', ');
        const remainingCount = names.length - 2;
        return `${firstTwoNames} and ${remainingCount} others like this`;
    }
}




function likes(names) {
    // if no one likes
    if(names.length === 0) {
        return 'no one likes this';
    }
    // between 1 and 3 people liking
    else if(names.length > 0 && names.length < 4) {
        return `${names.join(' and ')} like this`;
    }
    // 4+ people liking
    else {
        const firstTwoNames = names.slice(0, 2).join(', ');
        const remainingCount = names.length - 2;
        return `${firstTwoNames} and ${remainingCount} others like this`;
    }
}



// Original thought
function likes(names) {
    // if no one likes
    if(names.length === 0) {
        return 'no one likes this'
    // bewteen 1 and 3 people liking
    let likeNames = []
    } else if(names.length > 0 && names.length < 4) {
        for(let i = 0; i < names.length; i++) {
            likeNames.push(names[i])
        }
        // pull names from likeNames array and add to "likes this"
    }
}




/* =============
Other Solutions
============= */
function likes(names) {
    if(names.length === 0) return "no one likes this";
    if(names.length === 1) return names[0] + " likes this";
    if(names.length === 2) return names[0] + " and " + names[1] + " like this";
    if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}