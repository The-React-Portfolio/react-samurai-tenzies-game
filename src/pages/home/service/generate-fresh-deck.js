import { generateRandomNumbers } from "./generate-random-numbers.js";
import { getCardMap } from "./card-map.js";

export default function generateFreshDeck() {
  const cardMap = getCardMap();

  let arrayOfCards = [];
  for (let i = 0; i < 10; ++i) {
    let key = String(generateRandomNumbers(1, 13));
    let card  = {
      isLocked: false,
      name: cardMap[key].split("-").join(" "),
      icon: cardMap[key]
    };
    arrayOfCards.push(card);
  }

  return arrayOfCards;
}
