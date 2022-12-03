/**
  * helps to create the combined reducers instance for the redux store
  **/

/* node module imports */
import { combineReducers } from "redux";

/* app imports */
import cardsReducer from "./cards/index.js";
import gameStateReducer from "./game-state/index.js";

export const reducersCentral = () => {
  return combineReducers({
    cards: cardsReducer,
    gameIsComplete: gameStateReducer
  });
};
