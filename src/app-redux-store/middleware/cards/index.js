/* app imports */
import { createFreshCards, rollDice } from "@appReduxStore/reducers/cards/index.js";
import createFreshDeck from "./create-fresh-deck.js";

export const cardsMiddleware = (storeApi) => {
  return (next) => {
    return (action) => {
      if (action.type === createFreshCards().type) {
        setTimeout(() => {
          const freshDeckOfCards = createFreshDeck();
          action.payload.freshDeckOfCards = freshDeckOfCards;
          action.payload.setIsLoading(false);
          next(action);
        }, 2000);
      }
      else if (action.type === rollDice().type) {
        setTimeout(() => {
          action.payload.setIsLoading(false);
          next(action);
        }, 2000);
      }
      else {
        return next(action);
      }
    };
  };
};
