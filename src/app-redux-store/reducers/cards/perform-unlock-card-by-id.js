export default function performCardUnlockById(stackOfCards, cardId) {
  if (Object.keys(stackOfCards).length > 0) {
    stackOfCards[cardId].isLocked = false;
  }
  return stackOfCards;
};
