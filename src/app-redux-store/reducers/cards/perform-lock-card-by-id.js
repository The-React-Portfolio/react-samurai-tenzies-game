export default function performCardLockById(allCards, idToLock) {
  return allCards.map((card) => {
    if (card.id === idToLock) {
      card.isLocked = true;
    }
    return card;
  });
};
