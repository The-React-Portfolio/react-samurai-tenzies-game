/* app imports */
import {
  createFreshCardsAction,
  lockCardById,
  unlockCardById
} from "@appReduxStore/actions/card-actions.js";

import performCardUnlockById from "./perform-unlock-card-by-id.js";
import performCardLockById from "./perform-lock-card-by-id.js";

let initialState = [];

export default function cardsReducer(state = initialState, action) {
  if (action.type === createFreshCardsAction().type) {
    let newStackOfCards = action.payload.splice(0);
    return newStackOfCards;
  }
  else if (action.type === unlockCardById().type) {
    let stackOfCards = state.splice(0);
    return performCardUnlockById(stackOfCards, action.payload.id);
  }
  else if (action.type === lockCardById().type) {
    let stackOfCards = state.splice(0);
    return performCardLockById(stackOfCards, action.payload.id);
  }
  else {
    return state;
  }
}
