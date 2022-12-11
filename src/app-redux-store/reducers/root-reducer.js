/**
  * helps to create the combined reducers instance for the redux store
  **/

/* app imports */
import cardsReducer from "./cards/index.js";
import gameStateReducer from "./game-state/index.js";

export const rootReducer = () => {
  return {
    cards: cardsReducer,
    gameIsComplete: gameStateReducer
  };
};
