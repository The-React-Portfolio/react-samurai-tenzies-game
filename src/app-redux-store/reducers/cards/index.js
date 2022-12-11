/* node module imports */
import { createSlice } from "@reduxjs/toolkit";

/* app imports */
import generateDeckOnRoll from "./generate-deck-on-roll.js";
import { arrayToObjectNormalizer } from "./cards-normalizer.js";
import { performUnlockCardById, performLockCardById } from "./lock-toggle.js";

/* create */
const cardsSlice = createSlice({
  name: "cards",
  initialState: {},
  reducers: {
    createFreshCards: {
      reducer(state, action) {
        let arrayOfCards = action.payload.freshDeckOfCards.splice(0);
        return arrayToObjectNormalizer(arrayOfCards);
      },
      prepare(setIsLoading) {
        return {payload: {setIsLoading}}
      }
    },
    unlockCardById: {
      reducer(state, action) {
        return performUnlockCardById(state, action.payload.id);
      },
      prepare(id) {
        return {payload: {id}}
      }
    },
    lockCardById: {
      reducer(state, action) {
        return performLockCardById(state, action.payload.id);
      },
      prepare(id) {
        return {payload: {id}}
      }
    },
    rollDice: {
      reducer(state, action) {
        return generateDeckOnRoll(state);
      },
      prepare(setIsLoading) {
        return {payload: {setIsLoading}}
      }
    }
  }
});

/* exports */
export const { createFreshCards, unlockCardById, lockCardById, rollDice } = cardsSlice.actions;
export default cardsSlice.reducer;
