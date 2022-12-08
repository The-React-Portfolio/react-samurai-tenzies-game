/* app imports */
import { checkIfGameIsComplete } from "@appReduxStore/actions/game-state-actions.js";
import gameStatusChecker from "./check-if-complete.js";

let initialState = false;

export default function gameStateReducer(state = initialState, action) {
  if (action.type === checkIfGameIsComplete().type &&
    "cards" in action.payload && Object.keys(action.payload.cards).length > 0) {
    return gameStatusChecker(action.payload.cards);
  }
  else {
    return state;
  }
}
