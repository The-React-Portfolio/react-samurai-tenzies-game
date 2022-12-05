/* npm imports */
import uuid from "react-uuid";

/* app imports */
import { generateRandomNumbers } from "@appReduxStore/reducers/cards/generate-random-numbers.js";
import { getCardMap } from "@appReduxStore/reducers/cards/card-map.js";

export default function generateDeckOnRoll(currentDeck) {
  const cardMap = getCardMap();

  const updatedDeck = currentDeck.map((card) => {
    if (card.isLocked) {
      return Object.assign({}, card);
    }
    else {
      let key = String(generateRandomNumbers(1, 10));
      return {
        id: uuid(),
        isLocked: false,
        name: cardMap[key].name,
        icon: cardMap[key].src
      };
    }
  });

  return updatedDeck;
}
