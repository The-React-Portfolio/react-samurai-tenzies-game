/* app imports */
import { createFreshCardsAction } from "@appReduxStore/actions/card-actions.js";

let initialState = [];

export default function cardsReducer(state = initialState, action) {
  if (action.type === createFreshCardsAction().type) {
    let newStackOfCards = action.payload.splice(0);
    return newStackOfCards;
  }
  else {
    return state;
  }
}
