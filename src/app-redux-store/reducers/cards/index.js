/* node module imports */
import {
  createFreshCardsAction,
  lockCardById,
  unlockCardById,
  rollDiceAction
} from "@appReduxStore/actions/card-actions.js";

/* app imports */
import generateDeckOnRoll from "./generate-deck-on-roll.js";
import { arrayToObjectNormalizer } from "./cards-normalizer.js";
import { performUnlockCardById, performLockCardById } from "./lock-toggle.js";

let initialState = {};

export default function cardsReducer(state = initialState, action) {
  if (action.type === createFreshCardsAction().type) {
    let arrayOfCards = action.payload.splice(0);
    return arrayToObjectNormalizer(arrayOfCards);
  }
  else if (action.type === unlockCardById().type) {
    return performUnlockCardById(state, action.payload.id);
  }
  else if (action.type === lockCardById().type) {
    return performLockCardById(state, action.payload.id);
  }
  else if (action.type === rollDiceAction().type) {
    return generateDeckOnRoll(state);
  }
  else {
    return state;
  }
}
