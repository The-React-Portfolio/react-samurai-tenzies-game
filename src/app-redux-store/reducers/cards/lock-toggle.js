/* unlock */
export const performUnlockCardById = (state, cardId) => {
  state[cardId].isLocked = false;
  return state;
};

/* lock */
export const performLockCardById = (state, cardId) => {
  state[cardId].isLocked = true;
  return state;
};
