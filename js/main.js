var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[3];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[1];
console.log("User flipped " + cardTwo);
cardsInPlay.push(cardTwo);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");}
else {alert("sorry, try again");};




