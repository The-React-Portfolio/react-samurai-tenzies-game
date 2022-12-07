export default function performCardLockById(stackOfCards, cardId) {
  if (Object.keys(stackOfCards).length > 0) {
    stackOfCards[cardId].isLocked = true;
  }
  return stackOfCards;
};
