/* node module imports */
import { createSlice } from "@reduxjs/toolkit";

/* app imports */
import gameStatusChecker from "./check-if-complete.js";

/* create */
const gameStateSlice = createSlice({
  name: "gameState",
  initialState: false,
  reducers: {
    checkIfGameIsComplete(state, action) {
      if ("cards" in action.payload && Object.keys(action.payload.cards).length > 0) {
        return gameStatusChecker(action.payload.cards);
      }
    }
  }
});

/* exports */
export const { checkIfGameIsComplete } = gameStateSlice.actions;
export default gameStateSlice.reducer;
