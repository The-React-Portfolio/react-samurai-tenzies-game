export default function performCardUnlockById(allCards, idToUnlock) {
  return allCards.map((card) => {
    if (card.id === idToUnlock) {
      card.isLocked = false;
    }
    return card;
  });
};
