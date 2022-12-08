/* node module imports */
import produce from "immer";

/* unlock */
export const performUnlockCardById = produce((draft, cardId) => {
  if (Object.keys(draft).length > 0) {
    draft[cardId].isLocked = false;
  }
});

/* lock */
export const performLockCardById = produce((draft, cardId) => {
  if (Object.keys(draft).length > 0) {
    draft[cardId].isLocked = true;
  }
});
