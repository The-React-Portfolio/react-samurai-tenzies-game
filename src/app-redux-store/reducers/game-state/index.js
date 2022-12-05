/* app imports */
import { checkIfGameIsComplete } from "@appReduxStore/actions/game-state-actions.js";
import gameStatusChecker from "./check-if-complete.js";

let initialState = false;

export default function gameStateReducer(state = initialState, action) {
  if (action.type === checkIfGameIsComplete().type) {
    if ("cards" in action.payload && action.payload.cards.length > 0) {
      const currentStack = action.payload.cards.slice(0);
      return gameStatusChecker(currentStack);
    }
    else {
      return state;
    }
  }
  else {
    return state;
  }
}
