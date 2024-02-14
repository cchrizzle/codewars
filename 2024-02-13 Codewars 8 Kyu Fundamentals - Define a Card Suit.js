// 2/13/24 Tuesday Codewars 8 Kyu Fundamentals - Define a Card Suit

// https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript

/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

// AFternoon repractice
function defineSuit(card) {
    const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades'
    }

    return suits[card[card.length -1]];     // Using charAt in other solutions might be preferable since it's defined clearer and may be easier to read as a result
}



// 2nd attempt - working
function defineSuit(card) {
    if (card.length === 3) {
        if (card[2] === '♣') {
            return 'clubs';
        } else if (card[2] === '♦') {
            return 'diamonds';
        } else if (card[2] === '♥') {
            return 'hearts';     
        } else if (card[2] === '♠') {
            return 'spades';     
        }
    }


    if (card[1] === '♣') {
        return 'clubs';
    } else if (card[1] === '♦') {
        return 'diamonds';
    } else if (card[1] === '♥') {
        return 'hearts';     
    } else if (card[1] === '♠') {
        return 'spades';     
    }
}


// 1st attempt - not working
// Forgot to account for '10'
function defineSuit(card) {
    if (card[1] === '♣') {
        return 'clubs';
    } else if (card[1] === '♦') {
        return 'diamonds';
    } else if (card[1] === '♥') {
        return 'hearts';     
    } else if (card[1] === '♠') {
        return 'spades';     
    }
}




/* =============
Other Solutions
============= */
function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
}