/* node module imports */
import uuid from "react-uuid";
import produce from "immer";

/* app imports */
import { generateRandomNumbers } from "@appReduxStore/reducers/cards/generate-random-numbers.js";
import { getCardMap } from "@appReduxStore/reducers/cards/card-map.js";

export default function generateDeckOnRoll(state) {
  let updatedDeck = produce(state, (draft) => {
    const cardMap = getCardMap();
    return Object.keys(draft).reduce((composed, key) => {
      let card = draft[key];

      if (card.isLocked) {
        composed[key] = card;
      }
      else {
        const randNum = String(generateRandomNumbers(1, 10));
        const key = uuid();
        composed[key] = {
          id: key,
          isLocked: false,
          name: cardMap[randNum].name,
          icon: cardMap[randNum].src
        };
      }

      return composed;
    }, {});
  });
  return updatedDeck;
}
