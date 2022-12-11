/**
  * this gives the ability to use middleware along with the redux dev tools instance to track state
  * changes in the app
  **/

/* app imports */
import { cardsMiddleware } from "./cards/index.js";
import { gameStateMiddleware } from "./game-state/index.js";

export const rootMiddleware = (getDefaultMiddleware) => {
  const appMiddleware = getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['cards/createFreshCards', 'cards/rollDice']
    }
  }).concat(cardsMiddleware, gameStateMiddleware);

  return appMiddleware;
};
