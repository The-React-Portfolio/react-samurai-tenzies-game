/* app imports */
import { createFreshCardsAction } from "@appReduxStore/actions/card-actions.js";
import createFreshDeck from "./create-fresh-deck.js";

export const cardsMiddleware = (storeApi) => {
  return (next) => {
    return (action) => {
      if (action.type === createFreshCardsAction().type) {
        setTimeout(() => {
          const freshDeckOfCards = createFreshDeck();
          action.payload = freshDeckOfCards;
          action.setIsLoading(false);
          next(action);
        }, 2000);
      }
      else {
        return next(action);
      }
    };
  };
};
