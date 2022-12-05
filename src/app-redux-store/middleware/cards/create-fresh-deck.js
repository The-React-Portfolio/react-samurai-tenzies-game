/* npm imports */
import uuid from "react-uuid";

/* app imports */
import { generateRandomNumbers } from "@appReduxStore/reducers/cards/generate-random-numbers.js";
import { getCardMap } from "@appReduxStore/reducers/cards/card-map.js";

export default function createFreshDeck() {
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

  /* end */
  return arrayOfCards;
}
