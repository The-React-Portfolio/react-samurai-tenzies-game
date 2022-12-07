/* node module imports */
import {
  createFreshCardsAction,
  lockCardById,
  unlockCardById,
  rollDiceAction
} from "@appReduxStore/actions/card-actions.js";

/* app imports */
import performCardUnlockById from "./perform-unlock-card-by-id.js";
import performCardLockById from "./perform-lock-card-by-id.js";
import generateDeckOnRoll from "./generate-deck-on-roll.js";
import { arrayToObjectNormalizer } from "./cards-normalizer.js";

let initialState = {};

export default function cardsReducer(state = initialState, action) {
  if (action.type === createFreshCardsAction().type) {
    let arrayOfCards = action.payload.splice(0);
    return arrayToObjectNormalizer(arrayOfCards);
  }
  else if (action.type === unlockCardById().type) {
    let stackOfCards = Object.assign({}, state);
    return performCardUnlockById(stackOfCards, action.payload.id);
  }
  else if (action.type === lockCardById().type) {
    let stackOfCards = Object.assign({}, state);
    return performCardLockById(stackOfCards, action.payload.id);
  }
  else if (action.type === rollDiceAction().type) {
    let stackOfCards = Object.assign({}, state);
    return generateDeckOnRoll(stackOfCards);
  }
  else {
    return state;
  }
}
