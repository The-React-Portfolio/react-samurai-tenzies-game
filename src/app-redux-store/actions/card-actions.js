/**
  * list of actions and their respective payloads (if applicable) for the cards feature in the redux
  * state
  */

const BASE_STRING = "cards";

export const createFreshCardsAction = () => {
  return {
    type: `${BASE_STRING}/CREATE_FRESH_CARDS`
  };
};
