/* npm imports */
import uuid from "react-uuid";

/* app imports */
import { generateRandomNumbers } from "./generate-random-numbers.js";
import { getCardMap } from "./card-map.js";

export default function generateFreshDeck() {
  const cardMap = getCardMap();

  let arrayOfCards = [];
  for (let i = 0; i < 8; ++i) {
    let key = String(generateRandomNumbers(1, 10));
    let card  = {
      id: uuid(),
      isLocked: false,
      name: cardMap[key].name,
      icon: cardMap[key].src
    };
    arrayOfCards.push(card);
  }

  /* set in local storage for future updates and use */
  window.localStorage.setItem("tenzies_deck", JSON.stringify(arrayOfCards));

  /* end */
  return arrayOfCards;
}
