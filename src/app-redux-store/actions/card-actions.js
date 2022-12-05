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
export const lockCardById = (cardId) => {
  return {
    type: `${BASE_STRING}/LOCK_CARD`,
    payload: {
      id: cardId
    }
  };
};
export const unlockCardById = (cardId) => {
  return {
    type: `${BASE_STRING}/UNLOCK_CARD`,
    payload: {
      id: cardId
    }
  };
};
