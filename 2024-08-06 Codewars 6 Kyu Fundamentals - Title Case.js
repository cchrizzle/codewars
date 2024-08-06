// 8/6/24 Tuesday Codewars 6 Kyu Fundamentals - Title Case

// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
Arguments (Haskell)

    First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
    Second argument: the original string to be converted.

Arguments (Other languages)

    First argument (required): the original string to be converted.
    Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

// 2nd try - working
function titleCase(title, minorWords) {
  let minorWordsArray = minorWords ? minorWords.toLowerCase().split(' ') : [];
  let titleArray = title.toLowerCase().split(' ');
  let titleCase = [];

  if (titleArray[0].length > 1) {
    titleCase.push(
      titleArray[0].slice(0, 1).toUpperCase() + titleArray[0].slice(1) // Forgot [0] in titleArray[0].slice(1)
    );
  } else {
    titleCase.push(titleArray[0].toUpperCase());
  }

  for (let i = 1; i < titleArray.length; i++) {
    if (!minorWordsArray.includes(titleArray[i])) {
      if (titleArray[i].length > 1) {
        titleCase.push(
          titleArray[i].slice(0, 1).toUpperCase() + titleArray[i].slice(1)
        );
      } else {
        titleCase.push(titleArray[i].toUpperCase());
      }
    } else {
      titleCase.push(titleArray[i]);
    }
  }

  return titleCase.join(' ');
}

// 1st try - not working
function titleCase(title, minorWords) {
  let minorWordsArray = minorWords.toLowerCase().split(' ');
  let titleArray = title.toLowerCase().split(' ');
  let titleCase = [];

  if (titleArray[0].length > 1) {
    titleCase.push(
      titleArray[0].slice(0, 1).toUpperCase() + titleArray.slice(1)
    );
  } else {
    titleCase.push(titleArray[0].toUpperCase());
  }

  for (let i = 1; i < titleArray.length; i++) {
    if (!minorWordsArray.includes(titleArray[i])) {
      if (titleArray[i].length > 1) {
        titleCase.push(
          titleArray[i].slice(0, 1).toUpperCase() + titleArray[i].slice(1)
        );
      } else {
        titleCase.push(titleArray[i].toUpperCase());
      }
    } else {
      titleCase.push(titleArray[i]);
    }
  }

  return titleCase.join(' ');
}

/* =============
Other Solutions
============= */
