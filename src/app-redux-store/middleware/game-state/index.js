/* app imports */
import { checkIfGameIsComplete } from "@appReduxStore/reducers/game-state/index.js";

export const gameStateMiddleware = (storeApi) => {
  return (next) => {
    return (action) => {
      if (action.type === checkIfGameIsComplete().type) {
        const currentCardsStack = storeApi.getState().cards;
        action.payload = {
          cards: currentCardsStack
        };
        return next(action);
      }
      else {
        return next(action);
      }
    }
  };
};
